ajouterProjet({
  titre: "Traqueur de production solaire",
  date: "2026-08",
  contexte: "Projet personnel",
  image: "images/Traqueur/affichage_energie.gif",
  tags: ["C/C++ (ESP32)", "CAO", "Impression 3D"],
  description: [
    "boitier qui permet de suivre la production solaire de la maison au regard d'appareils essentiels",
    "2 modes : voir l'énergie disponible, gestion de notification par utilisateur (pour contourner les limites des apis) qui prévient (lorsque l'on lui demande) l'utilisateur quand brancher et débrancher un appareil.",
    "plus de 1500 lignes de code pour faire fonctionner l'appareil, qui communique avec n (4 ?) api différentes",
    "l'appareil prévient l'admin quand le disjoncteur des paneaux est enclanché, ou bien qu'il serait plus rentable d'attendre les heures creuses",
    "Pour optimiser sa conso d'énergie, l'esp passe en mode deepsleep entre chaque requette. La conso moyenne est inférieure à 2 mW",
    ""
  ]
});