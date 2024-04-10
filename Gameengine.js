class Game{
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
        while (this.turnLeft > 0 && this.players.length > 1) {
          this.startTurn();
        }
        this.endGame();
    }    
    skipTurn() {
        this.turnLeft--;
    }
    
    startTurn(){
        console.log(`C'est le tour ${11 - this.turnLeft}`);
        this.players.forEach(player => {
            this.players = this.players.filter(player => player.hp > 0);
            let enemyIndex = Math.floor(Math.random() * this.players.length);
            let enemy = this.players[enemyIndex]; 
            console.log(`C'est à ${player.name} de jouer. Il va attaquer ${enemy.name}`);
            player.dealDamage(enemy);
        });
        this.skipTurn();
        console.log("Fin du tour.");
        this.watchStats();
        console.log("------------------");
    }
    
    endGame(){ 
        if (this.players.length === 1 || this.turnLeft === 0) {
          this.winner = this.players[0];
          this.winner.status = "Winner";
          console.log(`${this.winner.name} est le gagnant de la partie !`);
        } else {
          console.log("La partie est terminée sans gagnant.");
        }
    }
    
    watchStats() {
        console.log("Statistiques des personnages :");
        this.players.forEach(player => {
          console.log(`${player.name} - HP: ${player.hp}, Mana: ${player.mana}, Status: ${player.status}`);
        });
    }
}
