class Wizard extends Character{
    constructor(name){
        //Un wizard commence avec 10 points de vie et 200 points de mana. Il a 2 points de dégât.
        super(10, 2, 200);
        this.name = name;
    }
    Fireball(enemy){
        //Fireball qui inflige 7 points de dégât et qui coûte 25 points de mana.
        if(this.mana >= 25){
            enemy.hp -=7;
            this.mana -= 25;
            console.log(`${this.name} utilise Fireball et inflige 7 dégâts à ${victim.name}.`);
        } else{
            console.log("Pas assez de mana pour utiliser fireball.");
        }
    }
}