INSERT INTO categorie VALUES
(NULL, "Alimentation"),
(NULL, "Bâtiment"),
(NULL, "Fabrication"),
(NULL, "Services");

INSERT INTO specialite VALUES
(NULL, "Boucher", 1),
(NULL, "Boulanger", 1),
(NULL, "Chocolatier", 1),
(NULL, "Traiteur", 1),
(NULL, "Chauffagiste", 2),
(NULL, "Electricien", 2),
(NULL, "Menuisier", 2),
(NULL, "Plombier", 2),
(NULL, "Bijoutier", 3),
(NULL, "Couturier", 3),
(NULL, "Ferronier", 3),
(NULL, "Coiffeur", 4),
(NULL, "Fleuriste", 4),
(NULL, "Toiletteur", 4),
(NULL, "Webdesign", 4);

INSERT INTO ville VALUES
(NULL, "Lyon"),
(NULL, "Montélimar"),
(NULL, "Evian"),
(NULL, "Chamonix"),
(NULL, "Bourg-en-bresse"),
(NULL, "Vienne"),
(NULL, "Aix-les-bains"),
(NULL, "Annecy"),
(NULL, "Le Puy-en-Velay"),
(NULL, "Saint-Priest"),
(NULL, "Chambéry"),
(NULL, "Romans-sur-Isère"),
(NULL, "Annonay"),
(NULL, "Valence");

INSERT INTO artisan VALUES
(NULL, "Boucherie Dumont", 1, 4.5, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "boucherie.dumond@gmail.com", NULL, 1, DEFAULT ),
(NULL, "Au pain chaud", 2, 4.8, 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "baupainchaud@hotmail.com", NULL, 1, 1),
(NULL, "Chocolaterie Labbé", 3, 4.9, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "chocolaterie-labbe@gmail.com", "https://chocolaterie-labbe.fr", 1, 1),
(NULL, "Traiteur Truchon", 4, 4.1, 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "contact@truchon-traiteur.fr", "https://truchon-traiteur.fr", 1, DEFAULT ),
(NULL, "Orville Salmons", 5, 5.0, 3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "o-salmons@live.com", NULL, 2, 1),
(NULL, "Mont Blanc Eléctricité", 6, 4.5, 4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "contact@mont-blanc-electricite.com", "https://mont-blanc-electricite.com", 2, DEFAULT ),
(NULL, "Boutot & fils", 7, 4.7, 5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "boutot-menuiserie@gmail.com", "https://boutot-menuiserie.com", 2, DEFAULT ),
(NULL, "Vallis Bellemare", 8, 4.0, 6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "v.bellemare@gmail.com", "https://plomberie-bellemare.com", 2, DEFAULT ),
(NULL, "Claude Quinn", 9, 4.2, 7, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "claude.quinn@gmail.com", NULL, 3, DEFAULT ),
(NULL, "Amitee Lécuyer", 10, 4.5, 8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "a.amitee@hotmail.com", "https://lecuyer-couture.com", 3, DEFAULT ),
(NULL, "Ernest Carignan", 11, 5.0, 9, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "e-carigan@hotmail.com", NULL, 3, DEFAULT ),
(NULL, "Royden Charbonneau", 12, 3.8, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "r.charbonneau@gmail.com", NULL, 4, DEFAULT ),
(NULL, "Leala Dennis", 12, 3.8, 11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "l.dennos@hotmail.fr", "https://coiffure-leala-chambery.fr", 4, DEFAULT ),
(NULL, "C'est sup'hair", 12, 4.1, 12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "sup-hair@gmail.com", "https://sup-hair.fr", 4, DEFAULT ),
(NULL, "Le monde des fleurs", 13, 4.6, 13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "contact@le-monde-des-fleurs-annonay.fr", "https://le-monde-des-fleurs-annonay.fr", 4, DEFAULT ),
(NULL, "Valérie Laderoute", 14, 4.5, 14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "v-laredoute@gmail.com", NULL, 4, DEFAULT ),
(NULL, "CM Graphisme", 15, 4.4, 14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.", "contact@cm-graphisme.com", "https://cm-graphisme.com", 4, DEFAULT );