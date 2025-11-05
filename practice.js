const enemies = ["Goblin", "Orc", "Troll", "Dragon"];
const treasurePoints = 75;
const damageTaken = 25;
const multiplier = 2;
const maxPossiblePoints = 500;

let score = 0;
let collectedTreasure = false;







console.log("=== ADVENTURE BEGINS ===\n");

// Battle System - Using Switch Statement
for (let i = 0; i < enemies.length; i++) {
    let enemyName = enemies[i];
    let points = 0;
    
    switch (enemyName) {
        case "Goblin":
            console.log("A Goblin appeared!");
            points = 10;
            break;
        case "Orc":
            console.log("An Orc appeared!");
            points = 15;
            break;
        case "Troll":
            console.log("A Troll appeared!");
            points = 20;
            break;
        case "Dragon":
            console.log("A Dragon appeared!");
            points = 30;
            break;
        default:
            console.log("An unknown enemy appeared!");
            points = 5;
            break;
    }
    
    score += points;
    console.log(`Defeated ${enemyName}! Earned ${points} points. Total score: ${score}\n`);
}


function calculateEnemyPoints(enemyName) {
    let points = 0;

    switch (enemyName) {
        case "Goblin":
            points = 10;
            break;
        case "Orc":
            points = 15;
            break;
        case "Troll":
            points = 20;
            break;
        case "Dragon":
            points = 30;
            break;
        default:
            points = 5;
            break;
    }

    return points; // will send the points back!
}

console.log(calculateEnemyPoints("Dragon"));
console.log(calculateEnemyPoints("Goblin"));

function displayVictoryMessage(enemyName, points) {
    console.log(`Defeated ${enemyName}! Earned ${points}!`);
}

function applyMultiplier(score, multiplier) {
    return score * multiplier;
}

console.log(applyMultiplier(100, 2));
