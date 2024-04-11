class Character{
    constructor(hp,dmg,mana){
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = "Playing";
        this.reduceDamageTaken = 1;
        this.shadowHitActive = false;
    }

    takeDamage(attacker, victim) {
        if (victim.hp > 0) {
            let damageAmount = attacker.dmg / victim.reduceDamageTaken;
            if(victim.shadowHitActive === true){
                damageAmount = 0;
            }
            console.log(`Aïe, ça pique ! ${victim.name} reçoit -${damageAmount} points de dommages de la part de ${attacker.name}`);
            victim.hp -= damageAmount;
            if (victim.hp <= 0) {
                console.log(`Ouch ! ${victim.name} a été tué par ${attacker.name}, ${attacker.name} gagne 20 points de mana`);
                victim.status = "Looser";
                attacker.mana += 20;
            }
        } else {
            console.log(`${victim.name} est déjà à 0 point de vie`);
        }
        this.reduceDamageTaken = 1; // Réinitialise le réducteur de dégâts après chaque coup reçu
    }

    dealDamage(victim){
        this.takeDamage(this,victim);
    }
}