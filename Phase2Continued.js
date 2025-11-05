const score = 180;
const percentage = 75;

// AND (&&) - AT LEAST ONE condition must be true
if (score >= 150 && percentage >= 50) {
    console.log("High score AND good percentage!");
}

// OR (||) - AT LEAST ONE condition must be true
if (score >= 200 || percentage >= 80) {
    console.log("Either high score OR great percentage!");
}

// NOT (!) - Flips true to false, false to true
const isGameOver = false;
if (!isGameOver) {
    console.log("Game is still running!"); // This runs because !false = true
}



const age = 25;
const hasLicense = true;
const hasCar = false;

// Must meet BOTH requirements to drive

if (age >= 16 && hasLicense) {
    console.log("You can legally drive!");
}

// Check if something is NOT true
if (!hasCar) {
    console.log("You need to rent a car!");
}



// Combining Multiple Conditions

const score = 175;
const enemiesDefeated = 5;
const treasuresFound = 2;

// You can combine AND and OR (use parentheses for clarity!)
if ((score >= 150 && enemiesDefeated >= 3) || treasuresFound >= 5) {
    console.log("Achievement unlocked!");
}

// This reads as: "(high score AND killed enough enemies) OR found lots of treasure"



// Common Patterns with Booleans
const isVerified = true;

// Don't do this (redundant)
if (isVerified === true) {
    console.log("Verified!");
}

// Do this instead:
if (isVerified) {
    console.log("Verified!");
}

// For checking if false:
if (!isVerified) {
    console.log("Not verified!");
}
