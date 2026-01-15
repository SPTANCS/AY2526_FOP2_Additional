class Player {
    constructor(name, hp, playerClass, attacks = []) {
        this.name = name;
        this.hp = hp;
        this.playerClass = playerClass;
        this.attacks = attacks;   // Array of Attack objects
    }

    isAlive() {
        return this.hp > 0;
    }

    getRandomAttack() {
        const index = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[index];
    }

    attack(targetPlayer) {
        if (!this.isAlive()) {
            console.log(`${this.name} is defeated and cannot attack.`);
            return;
        }

        if (!targetPlayer.isAlive()) {
            console.log(`${targetPlayer.name} is already defeated.`);
            return;
        }

        const attack = this.getRandomAttack();

        console.log(`${this.name} is attacking ${targetPlayer.name} with ${attack.name}`);

        if (attack.attemptHit()) {
            console.log(`The ${attack.name} is successful!`);
            targetPlayer.hp -= attack.damage;
            if (targetPlayer.hp < 0) targetPlayer.hp = 0;

            console.log(`${targetPlayer.name} received ${attack.damage} damage`);
            console.log(`${targetPlayer.name} HP is now ${targetPlayer.hp}`);
        } else {
            console.log(`The ${attack.name} failed!`);
            console.log(`${targetPlayer.name} received 0 damage`);
        }

        console.log("-------------------------");
    }
}

module.exports = Player;
