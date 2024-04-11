class Soldier extends Character{
    constructor(name){
        //Un Soldier commence avec 10 points de vie et 0 points de mana. Il a 4 points de dégât.
        super(10, 4, 0);
        this.name = name;
    }
    feast(victim){
        //feast qui a 1 chance sur 3 de remettre le Soldier a 10hp
        let luck = Math.floor(Math.random() * 3) + 1;
        if(luck === 3){
            this.hp = 10;
            console.log(`${this.name} participe a un festin et regagne toute sa vie`);
        } else{
            console.log(`${this.name} participe a un festin mais ce nourrit pas suffisement, il ne ce passe rien ...`);
        }
    }
}