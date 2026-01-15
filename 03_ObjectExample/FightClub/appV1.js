const Attack = require("./Attack");
const Player = require("./Player");

// Create attacks  
// e.g. new Attack( name, damage, hit percentage)              
const swordSlash = new Attack("Sword Slash"     , 20, 80);
const shieldBash = new Attack("Shield Bash"     , 10, 60);
const fireball   = new Attack("Fireball"        , 30, 70);
const lightning  = new Attack("Lightning Strike", 40, 50);

// Create players
// new Player(name, hp, playerClass, attacks array)
const warrior = new Player("Arthas", 100, "Warrior", [swordSlash, shieldBash]);
const wizard  = new Player("Merlin",  80, "Wizard" , [fireball, lightning]);

// Simulate battle
console.clear();
console.log("⚔️  The battle begins!");
console.log("-------------------------");

while (warrior.isAlive() && wizard.isAlive()) { // if one is dead, stop
  // Randomly choose who attacks
  const attacker = Math.random() < 0.5 ? warrior : wizard;  // 50/50 chance
  const defender = attacker === warrior ? wizard : warrior; // the other player

  attacker.attack(defender);  // perform the attack
}

// Announce winner
if (warrior.isAlive()) {
  console.log(`🏆 ${warrior.name} the ${warrior.playerClass} wins the battle!`);
} else {
  console.log(`🏆 ${wizard.name} the ${wizard.playerClass} wins the battle!`);
}
