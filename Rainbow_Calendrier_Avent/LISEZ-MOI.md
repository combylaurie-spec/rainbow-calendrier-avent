# Les 12 Jours Rainbow — chasse aux stickers

Du 13 au 24 décembre, à Nîmes et à Avignon. **Deux jeux en parallèle :**

| | Où | Comment on gagne | Lots |
|---|---|---|---|
| **Stickers de rue** | Collés en ville, 2 par jour (1 Nîmes + 1 Avignon) | On scanne le QR. **Un seul gagnant** : le premier | Remises, bons cadeau, pièce offerte |
| **Pastilles sous les pièces** | Collées sous la base de certaines pièces brutes de l'étagère | **Aucun QR** : on retourne sa pièce, on décolle, on présente au comptoir | Boisson, cookie |

**24 stickers scannables** (un code chacun, un seul bon chacun) et **24 pastilles**
sans code — la pastille *est* le bon, l'équipe la reprend à l'échange.

Les pastilles se découvrent au moment le plus juste : quand le client choisit sa
pièce et la retourne. Aucune cachette à entretenir, les pièces sont déjà sur
l'étagère.

Chaque bon de sticker porte un numéro unique (`19N96Q-001`) : c'est lui qu'on coche
au comptoir.

---

## ⚠️ À faire dans cet ordre, sans exception

Les QR contiennent l'adresse du site **gravée dans l'image**. Si le site change de
nom après l'impression, les stickers sont bons à jeter.

1. **Déployer le site** (voir plus bas) et vérifier qu'il s'affiche.
2. **Me donner l'adresse obtenue.**
3. Je régénère les 32 QR et les planches définitives.
4. **Puis seulement** : impression.

Les planches actuelles portent le filigrane **BAT · NE PAS IMPRIMER** : elles servent
à valider le design, pas à produire. Elles pointent vers une adresse provisoire.

## Déployer (via GitHub — obligatoire)

Le comptage a besoin que la fonction serveur tourne, donc que Netlify **installe les
dépendances**. Un dépôt par glisser-déposer ne le fait pas.

1. github.com → **New repository** → `rainbow-avent` → **Private** → créer
2. **« uploading an existing file »** → glisse **le contenu** de ce dossier
3. Netlify → **Add new site** → **Import an existing project** → GitHub → ce dépôt
4. Ne renseigne ni build command ni publish directory : `netlify.toml` s'en charge.

**Vérifier que la fonction vit :** ouvre `https://TON-SITE.netlify.app/api/claim?c=13NLNL`.
Du JSON → tout va bien. Une page HTML 404 → la fonction n'est pas partie, regarde
l'onglet **Deploys → Functions**.

⚠️ Ce test **consomme le sticker du 13 à Nîmes**. Pour remettre à zéro : Netlify →
**Blobs** → store `rainbow-avent` → supprime la clé.

## Deux fichiers, et pourquoi

| Fichier | Contenu | Servi publiquement ? |
|---|---|---|
| `jours.mjs` | Le calendrier : jours, lots, textes | **Oui** — la page l'importe |
| `netlify/functions/codes.mjs` | Les 24 codes des stickers | **Non, jamais** |

⚠️ **Ne remets jamais les codes dans `jours.mjs`.** Ce fichier est téléchargeable
par n'importe qui à l'adresse `/jours.mjs` : y mettre les codes reviendrait à
offrir les 24 lots à qui pense à l'ouvrir. Une règle de `netlify.toml` bloque en
plus tout accès à `/netlify/*`.

C'est aussi pour ça que la page ne valide plus rien toute seule : elle interroge
la fonction et affiche sa réponse. Si la fonction est absente, elle ne dévoile
aucun lot et renvoie au comptoir.

## Modifier les lots

Les lots et les textes sont dans **`jours.mjs`**.

- `JOURS` — les 12 jours, leur lot, et les 2 codes de stickers
- `CARTES` — les 8 cartes cachées
- `gros: true` — affiche une étoile sur la case du calendrier

Changer un libellé ou une validité : commit, Netlify redéploie tout seul.
**Changer un `code` oblige à réimprimer** le sticker correspondant.

## Relire avant décembre

Toutes les cases sont fermées jusqu'à leur date. Ajoute `?apercu=1` à l'adresse pour
ouvrir les douze d'un coup et relire les lots.

## Poser les stickers

Tu peux **tout coller d'un coup fin novembre** : un sticker scanné avant sa date
affiche « Trop tôt, ce sticker s'active le 22 décembre ». Pas de tournée quotidienne.

⚠️ **Coller dans l'espace public est de l'affichage sauvage**, et Avignon intra-muros
est en secteur sauvegardé. Privilégie vos deux devantures et les vitrines de
commerçants qui ont donné leur accord — c'est aussi ce qui évite qu'un sticker
disparaisse et qu'une journée soit morte.

## Si la fonction ne démarre pas

La page ne plante pas : elle délivre quand même le bon. Mais **sans comptage, chaque
personne qui scanne verra « c'est toi qui l'emportes »**. C'est un filet de sécurité
pour ne pas casser l'opération en public, pas un mode de fonctionnement.

## Ce qu'il reste à faire

- [ ] Déployer, figer l'adresse, me la donner
- [ ] Régénérer les 32 QR et les planches définitives
- [ ] Imprimer : 4 planches de stickers en **vinyle extérieur** (le papier ne tiendra
      pas trois semaines dehors) + 2 planches de jetons en **recto/verso, bord long**,
      sur papier épais
- [ ] Écrire le règlement de jeu et le mettre en ligne
- [ ] Préparer les 12 indices en story, avant le 13
