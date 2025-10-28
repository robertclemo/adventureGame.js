/*
switch (variable) {
    case value1:
        // code if variable === value1
        break;
    case value2:
        // code if variable === value2
        break;
    case value3:
        // code if variable === value3
        break;
    default:
        // code if no cases match
        break;
}

// Key Parts:
switch (variable) - what you're checking
case value: - each possible value
break; - stops checking (THIS IS IMPORTANT!)
default: - runs if nothing matches (like else)
*/

// Example:

const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend!");
        break;
}

// Enemy code with switch
const enemies = ["Goblin", "Orc", "Troll", "Dragon"];
const treasurePoints = 75;
const damageTaken = 25;
const multiplier = 2;
const maxPossiblePoints = 500;

let score = 0;
let collectedTreasure = false;

console.log("=== ADVENTURE BEGINS ===\n");
for (let i = 0; i < enemies.length; i++) {
    let points = 0;

    switch (i) {
        case 0:
            console.log("A Goblin appeared!");
            points = 10;
            break;
        case 1:
            console.log("An Orc appeared!");
            points = 15;
            break;
        case 2:
            console.log("A Troll appeared!");
            points = 20;
            break;
        case 3:
            console.log("A Dragon appeared!");
            points = 30;
            break;
    }
    
    score += points;
    console.log(`Defeated ${enemies[i]}! Earned ${points} points. Total score: ${score}\n`);
}
    
