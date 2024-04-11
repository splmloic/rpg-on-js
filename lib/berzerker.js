class Berzerker extends Character{
    constructor(name){
        //8 points de vie et 0 points de mana. Il a 4 points de dégât.
        super(8, 4, 0);
        this.name = name;
    }
    Rage(){
        //Le Berzerker aura une attaque spéciale Rage lui donnant +1 attaque pour tout le reste de la partie mais lui enlevant 1 hp. Elle coûte 0 mana.
        if(this.hp > 1){
            this.hp -= 1;
            this.dmg += 1;
            console.log(`${this.name} utilise Rage, Il gagne 1 Point d'Attaque et perd 1 point de Vie`)
        }else if(this.hp === 1){
            console.log("Pas assez de vie pour utiliser Rage.");
        }else{
            console.log("Tu es Deja mort.");
        }
    }
}