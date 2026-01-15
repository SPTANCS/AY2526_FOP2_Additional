const Attack = require("./Attack");
const Player = require("./Player");

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  blue: "\x1b[34m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m"
};

// Create attacks
const swordSlash = new Attack("Sword Slash", 20, 80);
const shieldBash = new Attack("Shield Bash", 10, 60);
const fireball   = new Attack("Fireball", 30, 70);
const lightning  = new Attack("Lightning Strike", 40, 50);

// Create players
const warrior = new Player("Arthas", 100, "Warrior", [swordSlash, shieldBash]);
warrior.color = colors.red;

const wizard  = new Player("Merlin",  80, "Wizard" , [fireball, lightning]);
wizard.color = colors.blue;

// Simulate battle
console.clear();
console.log("⚔️  The battle begins!");
console.log("-------------------------");

while (warrior.isAlive() && wizard.isAlive()) {
  const attacker = Math.random() < 0.5 ? warrior : wizard;
  const defender = attacker === warrior ? wizard : warrior;

  console.log(`${attacker.color}`);
  attacker.attack(defender);
  console.log(colors.reset);
}

// Winner
if (warrior.isAlive()) {
  console.log(`${colors.green}🏆 ${warrior.name} the ${warrior.playerClass} wins the battle!${colors.reset}`);
} else {
  console.log(`${colors.green}🏆 ${wizard.name} the ${wizard.playerClass} wins the battle!${colors.reset}`);
}