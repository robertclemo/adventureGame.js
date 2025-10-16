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

    return points;
}

function displayVictoryMessage(enemyName, points) {
    console.log(`Defeated ${enemyName}! Earned ${points} points!`);
}

function applyMultiplier(score, multiplier) {
    return score * multiplier;
}

// ========== CONSTANTS ==========

const enemies = ["Goblin", "Orc", "Troll", "Dragon"];
const treasurePoints = 75;
const damageTaken = 25;
const multiplier = 2;
const maxPossiblePoints = 500;

let score = 0;
let collectedTreasure = false;

// ========== GAME STARTS HERE ==========

console.log("=== ADVENTURE BEGINS ===\n");

// Battle System - Now using the function!
for (let i = 0; i < enemies.length; i++) {
    let enemyName = enemies[i];
    let points = calculateEnemyPoints(enemyName);  // This works now!
    
    console.log(`A ${enemyName} appeared!`);    
    score += points;
    console.log(`Defeated ${enemyName}! Earned ${points} points. Total score: ${score}\n`);
}

console.log(`All battles complete! Current score: ${score}\n`);

// Treasure (with trap!)
score += treasurePoints;
collectedTreasure = true;
console.log(`You opened a chest! Your score is now: ${score}`);

// Damage from trapped chest
score -= damageTaken;
console.log(`The chest was trapped! Poisoned dart hits you for ${damageTaken} damage. Score: ${score}\n`);

// Multiplier - Using the function!
score = applyMultiplier(score, multiplier);
console.log(`2x Bonus applied! Final Score: ${score}\n`);

// Calculate percentage
let percentage = (score / maxPossiblePoints) * 100;
console.log(`Percentage: ${percentage}%\n`);

// Rank evaluation
console.log("=== RANK EVALUATION ===");
if (score >= 200) {
    console.log("Legendary! S Rank achieved! 🏆");
} else if (score >= 150) {
    console.log("Excellent! A Rank! ⭐");
} else if (score >= 100) {
    console.log("Good job! B Rank! 👍");
} else if (score >= 50) {
    console.log("Not bad! C Rank!");
} else {
    console.log("Keep practicing! F Rank.");
}

// Bonus percentage check
if (percentage >= 50) {
    console.log("Congratulations for getting over half of the available points! 🎉");
}

console.log("\n=== 🏆 ACHIEVEMENTS 🏆 ===");

if (score >= 180 && percentage >= 35) {
    console.log("🏆 Perfect Run!");
}

if (collectedTreasure) {
    console.log("🏆 Treasure Hunter!");
}

if (score > 0) {
    console.log("🏆 Survivor!");
}

if (score >= 200 || percentage >= 40) {
    console.log("🏆 Elite Player!");
}

if (damageTaken > 0 && score >= 200) {
    console.log("🏆 Unstoppable!");
}