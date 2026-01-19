// Player class represents a character in the fight club game
class Player {
    // Constructor initializes a player with name, health points, class, and available attacks
    constructor(name, hp, playerClass, attacks = []) {
        this.name = name;                  // Player's name
        this.hp = hp;                      // Player's health points
        this.playerClass = playerClass;    // Player's class (e.g., warrior, mage)
        this.attacks = attacks;            // Array of Attack objects the player can use
    }

    // Check if the player is still alive (has health points remaining)
    isAlive() {
        return this.hp > 0;
    }

    // Select a random attack from the player's available attacks
    getRandomAttack() {
        const index = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[index];
    }

    // Execute an attack on the target player
    attack(targetPlayer) {
        // Check if this player is still alive
        if (!this.isAlive()) {
            console.log(`${this.name} is defeated and cannot attack.`);
            return;
        }

        // Check if the target player is still alive
        if (!targetPlayer.isAlive()) {
            console.log(`${targetPlayer.name} is already defeated.`);
            return;
        }

        // Select a random attack to use
        const attack = this.getRandomAttack();

        console.log(`${this.name} is attacking ${targetPlayer.name} with ${attack.name}`);

        // Determine if the attack hits (based on attack's hit chance)
        if (attack.attemptHit()) {
            console.log(`The ${attack.name} is successful!`);
            // Apply damage to the target player
            targetPlayer.hp -= attack.damage;
            // Ensure HP doesn't go below 0
            if (targetPlayer.hp < 0) targetPlayer.hp = 0;

            console.log(`${targetPlayer.name} received ${attack.damage} damage`);
            console.log(`${targetPlayer.name} HP is now ${targetPlayer.hp}`);
        } else {
            // Attack missed
            console.log(`The ${attack.name} failed!`);
            console.log(`${targetPlayer.name} received 0 damage`);
        }

        console.log("-------------------------");
    }
}

// Export the Player class for use in other modules
module.exports = Player;

