class Monk extends Character{
    constructor(name){
        //8 points de vie et 200 points de mana. Il a 2 points de dégât.
        super(8, 2, 200);
        this.name = name;
    }
    Heal(){
        //Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 pv. Elle coute 25 mana
        if(this.mana >= 25){
            this.hp += 8;
            this.mana -= 25;
            console.log(`${this.name} utilise Heal, Il ce soigne de 8 HP`)
        }else{
            console.log("Pas assez de mana pour utiliser Heal.");
        }
    }
}