import { getStore } from "@netlify/blobs";
import { ANNEE, JOURS } from "../../jours.mjs";
import { PAR_CODE } from "./codes.mjs";

const PAR_JOUR = new Map(JOURS.map((j) => [j.n, j]));

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

// Un sticker n'existe qu'à partir de son jour, heure de Paris.
const ouvert = (n) => {
  const ici = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Paris" })
  );
  if (ici.getFullYear() !== ANNEE) return ici.getFullYear() > ANNEE;
  if (ici.getMonth() !== 11) return ici.getMonth() > 11;
  return ici.getDate() >= n;
};

export default async (req) => {
  const code = (new URL(req.url).searchParams.get("c") || "").trim().toUpperCase();
  if (!code) return json({ statut: "absent" });

  const sticker = PAR_CODE.get(code);
  if (!sticker) return json({ statut: "inconnu" });
  const item = { ...sticker, ...PAR_JOUR.get(sticker.n) };
  if (!ouvert(item.n)) return json({ statut: "trop_tot", jour: item.n });

  const store = getStore("rainbow-avent");

  // On n'utilise que get/set, les deux méthodes les plus stables de l'API.
  let fiche = { bons: 0 };
  const brut = await store.get(code);
  if (brut) {
    try { fiche = JSON.parse(brut); } catch { /* fiche neuve */ }
  }

  // Un sticker ne donne QU'UN bon : le premier qui scanne l'emporte.
  if (fiche.bons >= 1) {
    return json({ statut: "epuise", jour: item.n, lot: item.lot });
  }

  fiche.bons += 1;
  const maintenant = new Date().toISOString();
  fiche.dernier = maintenant;
  if (!fiche.premier) fiche.premier = maintenant;
  await store.set(code, JSON.stringify(fiche));

  // Un bon vaut un mois à compter du scan. On renvoie la date en clair :
  // c'est le serveur qui fait foi, pas l'horloge du téléphone.
  const fin = new Date();
  fin.setMonth(fin.getMonth() + 1);
  const expire = fin.toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris",
  });

  return json({
    statut: "gagne",
    jour: item.n,
    expire,
    ville: item.ville,
    lot: item.lot,
    texte: item.texte,
    numero: `${code}-${String(fiche.bons).padStart(3, "0")}`,
  });
};

export const config = { path: "/api/claim" };
