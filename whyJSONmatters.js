// Why JSON matters

// Saving game data

const gameState = {
    player: { name: "Robert", level: 10 },
    score: 5000,
    achievements: ["First Win", "Speedrun"]
};

// Save to localStorage (browser storage)
localStorage.setItem('saveGame', JSON.stringify(gameState));

// Load later

const loaded = JSON.parse(localStorage.getItem('saveGame'));
console.log(loaded.score);

// API Responses (I'll use this in Phase 6!)

// When you fetch data froman API, it comes as JSON
// const response = await fetch('https://api.example.com/player/123');
// const playerData = await response.json(); // Converts JSON to object

// console.log(playerData.name);

// Configuration Files
/*
{
    "enemies": [
        {"name": "Goblin", "health": 30},
        {"name": "Dragon", "health": 200}
    ],
    "difficulty": "hard"
}


// JSON Rules (Important!)

// Valid Json:
{
    "name": "Alice",
    "age": 25,
    "active": true,
    "skills": ["magic", "archery"],
    "stats": {
        "health": 100,
        "mana": 50
    }
}

// Invalid JSON:
{
    name: "Alice",           // ❌ Missing quotes around key
    'age': 25,               // ❌ Single quotes not allowed
    active: true,
    skills: ["magic", "archery",],  // ❌ Trailing comma
    greet: function() {}     // ❌ Functions not allowed
}

// JSON can only contain:
- Strings (in double quotes)
- Numbers
- Booleans (true/false)
- Arrays
- Objects
- null

JSON CANNOT Contain:
- Functions
- undefined
- Comments

*/