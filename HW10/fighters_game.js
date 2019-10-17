//TODO same but OOP 
function Fighter(obj) { // {name, damage, hp, agility}
    let name = obj.name,
        damage = obj.damage,
        hp = obj.hp,
        agility = obj.agility,
        win = 0,
        loss = 0;

    function attack(defender) {
        if (Math.random() * 100 >= defender.getAgility()) {
            defender.dealDamage(this.getDamage());
            console.log(this.getName() + `(${this.getHp()}hp)` + ' make ' + this.getDamage() + ' damage to ' + defender.getName() + `(${defender.getHp()}hp)`);

        } else {
            console.log(this.getName() + ' missed');
        }
    }

    return {
        getName: () => name,
        getDamage: () => damage,
        getHp: () => hp,
        getAgility: () => agility,
        heal: (hpVal = obj.hp) => hp += hpVal,
        dealDamage: (dmg) => ((hp -= dmg) >= 0) ? hp : hp = 0,
        addWin: () => win++,
        addLoss: () => loss++,
        logCombatHistory: () => console.log(`Name: ${name}, Wins: ${win}, Losses: ${loss}`),
        attack
    };
}

const fighterJohn = new Fighter({
    name: 'John',
    damage: 20,
    hp: 100,
    agility: 25
});
const fighterJim = new Fighter({
    name: 'Jim',
    damage: 10,
    agility: 40,
    hp: 120
});

function battle(fighter1, fighter2) {
    while (fighter1.getHp() > 0 && fighter2.getHp() > 0) {
        Math.random() < 0.5 ? fighter1.attack(fighter2) : fighter2.attack(fighter1);
    }
    if (fighter1.getHp()) { 
        fighter1.addWin();
        fighter2.addLoss();
    } else if (fighter2.getHp()){
        fighter2.addWin();
        fighter1.addLoss();
    } else {
        console.log('Something went wrong');
    }
    fighter1.logCombatHistory();
    fighter2.logCombatHistory();
}