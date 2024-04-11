class Fighter extends Character{
    constructor(name){
        //12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).
        super(12,4,40);
        this.name = name;
    }

    DarkVision(victim){
        //infligeant 5 dégâts. Lors du prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana
        if (this.mana >= 20) {
            victim.hp -= 5; 
            this.mana -= 20; 
            this.reduceDamageTaken = 2;
            console.log(`${this.name} utilise DarkVision et inflige 5 dégâts à ${victim.name}.`);
        } else {
            console.log("Pas assez de mana pour utiliser DarkVision.");
        }
    }
}