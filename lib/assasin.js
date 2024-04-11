class Assassin extends Character{
    constructor(name){
        //6 points de vie et 20 points de mana. Il a 6 points de dégât.
        super(6, 6, 20);
        this.name = name;
        this.shadowCount = 0;
    }
    ShadowHit(victim){
        //L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.
        if (this.mana >= 20 && this.shadowCount === 0) {
            this.shadowHitActive = true;
            this.shadowCount ++;
            this.mana -= 20;
            console.log(`${this.name} utilise Shadow Hit et se prépare pour l'attaque.`);
        } else {
            console.log("Pas assez de mana pour utiliser Shadow Hit.");
        }
    }
    ShadowHitAttack(enemy){
        if(this.shadowCount > 0){
            enemy.hp -= 7;
            if(enemy.hp > 0){
                this.hp -= 7;
                console.log(`${this.name} utilise Shadow Hit et ne tue pas ${enemy.name}.`)
            }
        }
        else{
            this.ShadowHit();
        }
    }
}
