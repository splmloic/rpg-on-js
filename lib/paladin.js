class Paladin extends Character{
    constructor(name){
        //Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.
        super(16, 3, 160);
        this.name = name;
    }
    HealingLighting(victim){
        //infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
        if(this.mana >=40){
            victim.hp -= 4;
            this.hp += 5;
            this.mana -= 40;
            console.log(`${this.name} utilise HealingLighting et inflige 4 dégâts à ${victim.name}. Il ce soigne de 5 HP`);
        }else {
            console.log("Pas assez de mana pour utiliser HealingLighting.");
        }
    }
}
