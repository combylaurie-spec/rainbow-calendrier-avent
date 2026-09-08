// Contenu PUBLIC du calendrier : ce que la page a le droit d'afficher.
// ⚠️ Aucun code de sticker ici. Ce fichier est servi tel quel par Netlify —
// y mettre les codes reviendrait à offrir tous les lots à qui ouvre l'adresse
// /jours.mjs. Les codes vivent dans netlify/functions/codes.mjs, qui n'est
// jamais publié en statique.

export const ANNEE = 2026;

export const JOURS = [
  {
    "n": 13,
    "jour": "dimanche",
    "gros": false,
    "lot": "−20 % sur ta pièce",
    "texte": "Sur la pièce de ton choix, quel que soit son prix."
  },
  {
    "n": 14,
    "jour": "lundi",
    "gros": false,
    "lot": "Un bon cadeau de 30 €",
    "texte": "À dépenser à Nîmes ou à Avignon."
  },
  {
    "n": 15,
    "jour": "mardi",
    "gros": false,
    "lot": "−30 % sur la deuxième pièce",
    "texte": "Viens à deux : la seconde pièce est à moins trente."
  },
  {
    "n": 16,
    "jour": "mercredi",
    "gros": false,
    "lot": "−20 % sur ta pièce",
    "texte": "Sur la pièce de ton choix, quel que soit son prix."
  },
  {
    "n": 17,
    "jour": "jeudi",
    "gros": false,
    "lot": "−40 % sur ta séance de janvier",
    "texte": "À poser en janvier, quand l'atelier est au calme."
  },
  {
    "n": 18,
    "jour": "vendredi",
    "gros": true,
    "lot": "La pièce de ton choix, offerte",
    "texte": "N'importe laquelle de l'étagère, du photophore au grand vase. Peinture et cuisson comprises."
  },
  {
    "n": 19,
    "jour": "samedi",
    "gros": true,
    "lot": "Un bon cadeau de 50 €",
    "texte": "À dépenser à Nîmes ou à Avignon, comme tu veux."
  },
  {
    "n": 20,
    "jour": "dimanche",
    "gros": false,
    "lot": "−30 % sur la deuxième pièce",
    "texte": "Viens à deux : la seconde pièce est à moins trente."
  },
  {
    "n": 21,
    "jour": "lundi",
    "gros": false,
    "lot": "−20 % sur ta pièce",
    "texte": "Sur la pièce de ton choix, quel que soit son prix."
  },
  {
    "n": 22,
    "jour": "mardi",
    "gros": false,
    "lot": "−40 % sur ta séance de janvier",
    "texte": "À poser en janvier, quand l'atelier est au calme."
  },
  {
    "n": 23,
    "jour": "mercredi",
    "gros": true,
    "lot": "La pièce de ton choix, offerte",
    "texte": "N'importe laquelle de l'étagère, du photophore au grand vase. Peinture et cuisson comprises."
  },
  {
    "n": 24,
    "jour": "jeudi",
    "gros": true,
    "lot": "Un bon cadeau de 50 €",
    "texte": "À dépenser à Nîmes ou à Avignon, comme tu veux."
  }
];

// Pastilles collées sous les pièces brutes : aucune mécanique en ligne,
// listées ici pour mémoire.
export const PASTILLES = [
  {
    "lot": "Une boisson offerte",
    "texte": "Thé, chocolat, café, limonade : celle que tu veux.",
    "quantite": 12
  },
  {
    "lot": "Un cookie offert",
    "texte": "Sorti du four le matin même.",
    "quantite": 12
  }
];
