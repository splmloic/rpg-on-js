//Grace sera le personnage de la classe Fighter
const one = new Fighter("Grace");
//Ulder sera le personnage de la classe Paladin
const two = new Paladin("Ulder");
//Moana sera le personnage de la classe Monk
const tree = new Monk("Moana");
//Draven sera le personnage de la classe Berzerker
const four = new Berzerker("Draven");
//Carl sera le personnage de la classe Assassin
const five = new Assassin("Carl");

const jeu = new AutoGame();

jeu.AddPlayer(one);
jeu.AddPlayer(two);
jeu.AddPlayer(tree);
jeu.AddPlayer(four);
jeu.AddPlayer(five);

//jeu.startGame();
