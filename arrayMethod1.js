// Array Method 1: Loop Through Each Item

// Old Way (for loop)

// const enemies = ["Goblin", "Orc", "Troll"];

for (let i = 0; i < enemies.length; i++) {
    console.log(enemies[i]);
}

// New Way (forEach loop)

const enemies = ["Goblin", "Orc", "Troll"];

enemies.forEach(enemy => {
    console.log(enemy);
});

// Even shorter

enemies.forEach(enemy => console.log(enemy));

