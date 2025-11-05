const a = 10;
const b = 3;

console.log(a + b); // 13 - Addition
console.log(a - b); // 7 - Subtraction
console.log(a * b); // 30 - Multiplication
console.log(a / b); // 3.3333... - Division
console.log(a ** b); // 1000 - Exponentiation (10 to the power of 3)

// Increment and Decrement
let score = 10;
score++; // Same as score = score + 1
console.log(score); // 11

score--; // Same as score = score - 1
console.log(score); // 10

//Assignment Operators

let points = 100;

points += 10 // Same as: points = points + 10
console.log(points); // 110

points -= 20; // Same as: points = points - 20
console.log(points); // 90
    
points *= 2; // Same as: points = points * 2
console.log(points); // 180

points /=3; // Same as: points = points / 3
console.log(points); // 60

// String Operators

const first = "Hello";
const second = "World";

// Concatenation with +
console.log(first + " " + second); // "Hello World"

// But template literals are cleaner!
console.log(`${first} ${second}`); // "Hello World"

// You can even "add" strings to numbers
console.log("score: " + 100); // "score: 100" (becomes a string!)

// Quirk: Type Coercion: JavaScript will try to be "helpful" and convert types automatically. This can be confusing:

console.log(5 + "5"); // "55" (string) - number becomes a string
console.log(5 - "5"); // 0 (number) - string becomes number
console.log("10" * 2); // 20 (number) - string becomes number
console.log(true + 1); // 2 (number) - true becomes 1, false becomes 0

// Keep your types consistent to avoid nasty surprises!

const enemyPoints = 15;
const enemiesDefeated = 3;
const treasurePoints = 75;
const damageTaken = 25;
const multiplier = 2;
const maxPossiblePoints = 500;
let score = 0;


//Defeats 3 enemies
console.log("Starting Score:", score);
score += enemyPoints * enemiesDefeated;
console.log(`You killed ${enemiesDefeated} enemies. Your Score is now: ${score}`);
// Finds a treasure chest
score += treasurePoints;
console.log(`You opened a chest! Your Score is now: ${score}`);
// Takes damage
score -= damageTaken;
console.log(`Ouch, that hurt! Score: ${score}`);
// 2x Multiplier
score *= multiplier;
console.log(`Final Score: ${score}`);
// Percentage out of 500 possible points
let percentage = (score / maxPossiblePoints) * 100;
console.log(`Percentage: ${percentage}%`);

// Basic If Statement
if (score > 100) { // If the condition in parentheses is true, the code in curly braces runs. If it's false, that code is skipped.
    console.log("Great job! You're doing well!");
}
// Code outside the if statement always runs
console.log("Game over! Your final score is:", score);

// If/Else - Two Paths

if (score >= 100) {
    console.log("You won!");
} else {
    console.log("Try again!");
}

// If/Else If/Else - Multiple Paths

if (score >= 200) {
    console.log("S Rank! Perfect!");
} else if (score >= 150) {
    console.log("A Rank! Excellent!");
} else if (score >= 100) {
    console.log("B Rank! Good Job!");
} else if (score >= 50) {
    console.log("C Rank! Keep trying!");
} else {
    console.log("F Rank! You suck!");
}

if (percentage >= 50) {
    console.log("Congratulations for getting over half of the available points!");
} else {
    console.log("You failed to even get half of the available points. Try again!");
}

// Comparison Operators

5 === 5 // true (equal value AND type)
5 == "5" // true (equal value, different types - avoid this!)
5 !== 3 // true (not equal)
5 > 3 // true (greater than)
5 < 3 // false (less than)
5 >= 5 // true (greater than or equal)
5 <= 10 // true (less than or equal to)

