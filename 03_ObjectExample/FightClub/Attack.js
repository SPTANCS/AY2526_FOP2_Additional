class Attack {
    constructor(name, damage, hitPercentage) {
        this.name = name;
        this.damage = damage;
        this.hitPercentage = hitPercentage; // 0–100
    }

    attemptHit() {
        const roll = Math.random() * 100;
        return roll <= this.hitPercentage;
    }
}

module.exports = Attack;
