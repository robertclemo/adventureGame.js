// Creating Objects

// Method 1: Object literal (most common)
const enemy = {
    name: "Dragon",
    health: 200,
    attack: 30
};



// Method 2: Start empty, add properties
const enemy2 = {};
enemy.name = "Dragon";
enemy.health = 200;
enemy.attack = 30;

// Objects with Methods (Functions inside objects)
//Objects can have functions as properties:
const player = {
    name: "Alice",
    health: 100,

    // Method 1: Traditional function
    takeDamage: function(damage) {
        this.health -= damage;
        console.log(`${this.name} took ${damage} damage! Health: ${this.health}`);
    },

    // Method 2: Shorthand (modern)
    heal(amount) {
        this.health += amount;
        console.log(`${this.name} healed ${amount}! Health: ${this.health}`);
    }
};

player.takeDamage(20); // "Alice took 20 damage! Health: 80"
player.heal(10); // "Alice healed 10! Health: 90"

// this refers to the object itself!