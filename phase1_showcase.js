// =====================================
// PHASE 1 MILESTONE ASSESSMENT
// Name: Robert Clemo
// Date: [Today's Date]
// Purpose: Demonstrate Phase 1 mastery for manager review
// =====================================

console.log("=== PHASE 1 COMPREHENSIVE ASSESSMENT ===\n");

// =====================================
// SECTION 1: VARIABLE DECLARATIONS & DATA TYPES
// =====================================
console.log("--- Section 1: Variables & Data Types ---");

// TODO 1: Declare variables using all three methods (var, let, const)
// Create:
// - var gameVersion = 1.0
// - let playerName = "Knight"  
// - const MAX_LEVEL = 100
var gameVersion = 1.0;
let playerName = "Maxxwell";
console.log(`Hello, ${playerName}!`);
const MAX_LEVEL = 100;
// TODO 2: Demonstrate all primitive data types
// Create variables showing:
// - number: playerHealth = 100
// - string: questName = "Dragon's Lair"
// - boolean: hasWeapon = true
// - undefined: nextQuest (declare but don't assign)
// - null: previousScore = null
let playerHealth = 100;
let questName = `Dragon's Lair`;
console.log(`You are on a quest to the ${questName}!`);
let hasWeapon = true;
let nextQuest;
const previousScore = null;
// TODO 3: Create complex data types
// - array: inventory = ["sword", "shield", "potion"]
// - object: playerStats = {strength: 15, defense: 12, magic: 8}
const inventory = ["sword", "shield", "potion"];
let playerStats = {"Strength: 15", "Defense: 12", "Magic: 8"};
// TODO 4: Type checking - use typeof to verify each type
// console.log the typeof for at least 5 of your variables


// =====================================
// SECTION 2: OPERATORS & CALCULATIONS
// =====================================
console.log("\n--- Section 2: Operators & Calculations ---");

// TODO 5: Arithmetic operators
// Given: baseScore = 100, bonus = 25, penalty = 10
// Calculate and display:
// - totalScore using addition
// - difference using subtraction  
// - doubledScore using multiplication
// - halfScore using division
// - remainder when totalScore is divided by 7 (modulus)

// TODO 6: Comparison operators
// Given: playerLevel = 45, requiredLevel = 50
// Show the result of:
// - Is playerLevel equal to requiredLevel?
// - Is playerLevel less than requiredLevel?
// - Is playerLevel >= 40?
// - Use both == and === to compare "50" with 50

// TODO 7: Logical operators
// Given: hasKey = true, doorLocked = true, hasLockpick = false
// Calculate:
// - canOpenDoor = hasKey && !doorLocked
// - canAttemptEntry = hasKey || hasLockpick
// - isStuck = !hasKey && doorLocked && !hasLockpick


// =====================================
// SECTION 3: SCORE CALCULATOR PROGRAM
// =====================================
console.log("\n--- Section 3: Score Calculator ---");

// TODO 8: Build a complete score calculation system
// Requirements:
// - Start with basePoints = 0
// - Add 50 points for "completing quest"
// - Add 30 points for "finding treasure"  
// - Subtract 15 points for "taking damage"
// - Multiply final score by 1.5 for "perfect run"
// - Calculate what percentage this is of maxScore = 200
// - Display each step with clear console.log messages


// =====================================
// SECTION 4: CONTROL FLOW DEMONSTRATION
// =====================================
console.log("\n--- Section 4: Control Flow ---");

// TODO 9: If/else chain for rank assignment
// Given a score variable (use 85 for testing):
// - Score >= 90: "S Rank"
// - Score >= 80: "A Rank"
// - Score >= 70: "B Rank"
// - Score >= 60: "C Rank"
// - Below 60: "F Rank"

// TODO 10: Loop demonstrations
// a) Use a for loop to simulate 5 combat rounds
//    Each round, add 10 points and display "Round X: Score = Y"
// b) Use a while loop to count down player stamina from 10 to 0
// c) Create an array of enemies ["Rat", "Goblin", "Orc"]
//    Use a for loop to display "Defeated [enemy]! +10 points"


// =====================================
// SECTION 5: MINI ADVENTURE GAME
// =====================================
console.log("\n--- Section 5: Complete Mini Game ---");

// TODO 11: Create a mini adventure that demonstrates everything
// Build a game that:
// 1. Tracks player stats (health, score, level)
// 2. Simulates 3 battles (use loops)
// 3. Calculates damage and points
// 4. Awards bonuses for combos
// 5. Determines final rank
// 6. Shows at least 3 different achievements

// Structure:
// - Initialize variables
// - Battle loop
// - Score calculation  
// - Rank determination
// - Achievement checking


// =====================================
// SECTION 6: BOSS DEMO - ADVANCED SHOWCASE
// =====================================
console.log("\n--- Section 6: Advanced Integration ---");

// TODO 12: Create a function that takes a player object and returns their status
// This shows you're already moving into Phase 3!
// Example:
// function getPlayerReport(player) {
//     return `${player.name} - Level ${player.level} - Score: ${player.score}`;
// }


// =====================================
// FINAL STATISTICS
// =====================================
console.log("\n=== ASSESSMENT COMPLETE ===");
// TODO 13: Create a summary object that contains:
// - totalLinesOfCode: (estimate)
// - conceptsDemonstrated: (count)
// - functionsCreated: (count)
// - dateCompleted: (today)
// Display this as a formatted report