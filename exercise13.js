// 1. Create game data
const gameData = {
    playerName: "Heywood Jabuzzoff",
    level: 10,
    score: 5000,
    inventory: ["Transparent Eye Patch", "Malnutrition Bar", "Under-the-Counter Medicine"],
    achievements: ["Goblin It Up", "Monster Maven"]
};

// 2. Convert to JSON
const savedGame = JSON.stringify(gameData);
console.log("Saved game:", savedGame);

// 3. Parse back to object
const loadedGame = JSON.parse(savedGame);

// 4. Welcome message
console.log(`Welcome back, ${loadedGame.playerName}! You're level ${loadedGame.level}`);

// 5. Verify it worked
console.log("Inventory:", loadedGame.inventory);
console.log("Achievements:", loadedGame.achievements);