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
//Dumbledor sera le personnage de la classe Wizard
const six = new Wizard("Dumbledor");
//Conbattant sera le personnage de la classe Soldier
const seven = new Soldier("Conbattant");

const jeu = new AutoGame();

jeu.AddPlayer(one);
jeu.AddPlayer(two);
jeu.AddPlayer(tree);
jeu.AddPlayer(four);
jeu.AddPlayer(five);
jeu.AddPlayer(six);
jeu.AddPlayer(seven);

//jeu.startGame();
