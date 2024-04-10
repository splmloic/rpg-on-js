class Character{
    constructor(hp,dmg,mana){
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = "Playing";
    }
    takeDamage(attacker,victim){
        if(victim.hp > 0){
            console.log(`Aïe, ça pique ! ${victim.name} recoit -${attacker.dmg} points de dommages de la part de ${attacker.name}`);
            victim.hp -= attacker.dmg;
            if(victim.hp <= 0){
                console.log(`ouie ${victim.name} a été tué par ${attacker.name}, ${attacker.name} gagne 20pts de mana`)
                victim.status = "Looser";
                attacker.mana += 20;  
            }
        }else{
            console.log(`${victim.name} est deja a 0 point de vie`);
        }
    }

    dealDamage(victim){
        this.takeDamage(this,victim);
    }
}

class Fighter extends Character{
    constructor(name){
        //12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).
        super(12,4,40);
        this.name = name;
    }

    DarkVision(){
        //infligeant 5 dégâts. Lors du prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana
    }
}

class Paladin extends Character{
    constructor(name){
        //Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.
        super(16, 3, 160);
        this.name = name;
    }
    HealingLighting(){
        //infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
    }
}

class Monk extends Character{
    constructor(name){
        //8 points de vie et 200 points de mana. Il a 2 points de dégât.
        super(8, 2, 200);
        this.name = name;
    }
    Heal(){
        //Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 pv. Elle coute 25 mana
    }
}

class Berzerker extends Character{
    constructor(name){
        //8 points de vie et 0 points de mana. Il a 4 points de dégât.
        super(8, 4, 0);
        this.name = name;
    }
    Rage(){
        //Le Berzerker aura une attaque spéciale Rage lui donnant +1 attaque pour tout le reste de la partie mais lui enlevant 1 hp. Elle coûte 0 mana.
    }
}

class Assassin extends Character{
    constructor(name){
        //6 points de vie et 20 points de mana. Il a 6 points de dégât.
        super(6, 6, 20);
        this.name = name;
    }
    ShadowHit(){
        //L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.
    }
}

