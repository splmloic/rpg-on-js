class AutoGame{
    constructor(){
        this.turnLeft = 10;
        this.players = [];
        this.winner = null;
    }

    AddPlayer(player){
        this.players.push(player);
    }

    startGame(){
        console.log("La partie commence !");
        while (this.turnLeft > 0) {
            this.startTurn();
        }
        this.endGame();
    }

    skipTurn() {
        const alivePlayersCount = this.players.filter(player => player.hp > 0).length;
        if(alivePlayersCount <= 1){
            this.turnLeft =0;
        }else{
            this.turnLeft--;
        }
    }

    startTurn(){
        console.log(`C'est le tour ${11 - this.turnLeft}`);
        let activePlayers = this.players.filter(player => player.hp > 0);
    
        activePlayers.forEach(attacker => {
            let enemies = activePlayers.filter(enemy => enemy !== attacker);
            let Rolldice = Math.floor(Math.random() * 6) + 1;
            if (enemies.length === 0) return; // No valid enemy to attack
            let enemyIndex = Math.floor(Math.random() * enemies.length);
            let enemy = enemies[enemyIndex];
            if(attacker.hp >0){
                console.log(`C'est à ${attacker.name} de jouer. Son dès affiche ${Rolldice}. Il va attaquer ${enemy.name}`);
                if(Rolldice === 6){
                    if(attacker instanceof Fighter && attacker.mana >= 20){
                        attacker.DarkVision(enemy);
                    }else if(attacker instanceof Paladin && attacker.mana >= 40){
                        attacker.HealingLighting(enemy);
                    }else if(attacker instanceof Monk && attacker.mana >= 25){
                        attacker.Heal();
                    }else if(attacker instanceof Berzerker){
                        attacker.Rage();
                    }else if(attacker instanceof Assassin && attacker.mana >= 20 && attacker.shadowCount === 0){
                        attacker.ShadowHitAttack(enemy);
                    }else if(attacker instanceof Wizard && attacker.mana >= 25){
                        attacker.Fireball(enemy);
                    }else if(attacker instanceof Soldier && attacker.mana >= 25){
                        attacker.feast();
                    }
                }else{
                    attacker.dealDamage(enemy);
                }
                if (enemy.hp <= 0) {
                    enemy.status = "Losser"; 
                }
            }
        });
        console.log("Fin du tour.");
        console.log("------------------");
        this.watchStats();
        this.skipTurn();
        console.log("------------------");
    }
    
    endGame() {
        if (this.players.length === 1 || this.turnLeft === 0) {
            const alivePlayers = this.players.filter(player => player.hp > 0);
            if (alivePlayers.length > 0) {
                const winner = alivePlayers[0]; // Prend le premier joueur vivant comme gagnant
                winner.status = "Winner";
                console.log(`${winner.name} est le gagnant de la partie !`);
                this.winner = winner;
            } else {
                console.log("Tous les joueurs sont hors jeu.");
                this.winner = null; // Aucun gagnant en cas de tous les joueurs hors jeu
            }
        } else {
            console.log("La partie est terminée sans gagnant.");
            this.winner = null;
        }
    }
    
    watchStats() {
        console.log("Statistiques des personnages :");
        this.players.forEach(player => {
          console.log(`${player.name} - HP: ${player.hp}, Mana: ${player.mana}, Status: ${player.status}`);
        });
    }
}
