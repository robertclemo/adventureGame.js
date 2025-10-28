const enemies = ["Goblin", "Orc", "Troll", "Dragon"];

enemies.forEach(function(enemy, index) {
    console.log(`Enemy ${index + 1}: ${enemy}`);
});

// Or with arrow function (shorter)
enemies.forEach((enemy, index) => {
    console.log(`Enemy ${index + 1}: ${enemy}`);
});

