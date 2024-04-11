# Projet RPG

Ce projet de Minimal RPG est développé en JavaScript et est conçu pour être exécuté dans un environnement de navigateur.

## Contenu du Projet

- `AutoGame.js`: Fournit des variables de base pour l'exécution automatique du jeu.
- `AutoGameengine.js`: Contient la classe `AutoGame` qui gère la logique principale du jeu, y compris les tours, les attaques, etc.
- `lib/`: Dossier contenant les classes des personnages jouables du jeu.
  - `Character.js`: Classe de base pour les personnages.
  - `Assassin.js`, `Berzerker.js`, `Fighter.js`, `Monk.js`, `Paladin.js`, `Soldier.js`, `Wizard.js`: Classes pour différents types de personnages.
  
## Comment Jouer

1. Ouvrez le fichier `index.html` dans un navigateur pour démarrer le jeu.
2. Choisissez entre le mode de jeu automatique ou manuel en utilisant le sélecteur prévu à cet effet.
3. Cliquez sur le bouton "Lancer l'autoplay" pour commencer le jeu.

## Fonctionnalités Principales

- Les personnages ont des attributs uniques tels que les points de vie (hp), les points de mana (mana), les dégâts (dmg), et des attaques spéciales.
- Le jeu gère automatiquement les tours, les attaques des joueurs et des ennemis, et détermine le gagnant à la fin du jeu.
- Le jeu offre des options d'attaques spéciales en fonction du type de personnage et des ressources disponibles (points de mana, etc.) selon un jet de dès à 6 faces.

## Développement et Contribution

- Clonez ce dépôt localement pour contribuer ou tester le jeu.
- Vous pouvez ajouter de nouveaux types de personnages, des attaques spéciales, ou améliorer la logique de jeu dans les fichiers existants.

---

Amusez-vous bien à jouer au jeu RPG !
