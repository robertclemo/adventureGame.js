// Looping through object properties
const enemy = { name: "Orc", health: 50, attack: 10 };

const keys = Object.keys(enemy);
console.log(keys);

const values = Object.values(enemy);
console.log(values);

const entries = Object.entries(enemy);
console.log(entries);

Object.keys(enemy).forEach(key => {
    console.log(`${key}: ${enemy[key]}`);
});

// Exercise 12: Create a game character!
const player = {
    name: "Robert",
    health: 100,
    mana: 100,
    level: 1,
    inventory: ["staff", "potion"],  // ← Added comma here!

    attack: function(target) {
        target.health -= 10;
        console.log(`${this.name} attacks ${target.name} for 10 damage!`);
    },

    usePotion: function() {
        this.health += 20;
        console.log(`${this.name} used a potion! Health: ${this.health}`);
    }
};

// Test it
const goblin = { name: "Goblin", health: 30 };  // ← Changed to 'goblin' (you had 'enemy' twice)

player.attack(goblin);
console.log(`${goblin.name} health: ${goblin.health}`);

player.health = 80;  // Simulate taking damage
player.usePotion();
