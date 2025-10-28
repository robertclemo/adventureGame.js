const player = {
    name: "Alice",
    health: 100,
    level: 5,
    inventory: ["sword", "potion"]
};

// Accessing Object Properties:

// Dot notation (most common)

console.log(player.name);
console.log(player.health);
console.log(player.level);

// Bracket notation (when property name is in a variable)

const property = "health"; // I called it property instead of prop so I would know what it was

console.log(player[property]); // 100
console.log(player["name"]); // "Alice"

// Modifying Objects:

// player object remains the same, but we are only using name and health here

// Change a property
player.health = 80;
console.log(player.health); // 80

// Add a new property
player.mana = 50;
console.log(player); // { "Alice", health: 80, mana: 50 }

// Delete a property
delete player.mana;
console.log(player); // { name: "Alice", health: 80 }
