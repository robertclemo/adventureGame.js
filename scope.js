// Global Scope

const playerName = "Robert"; // Global variable

function greet() {
    console.log(playerName); // Can access global variable
}

function battle() {
    console.log(playerName); // Can also access it here
}

greet(); // "Robert"
battle(); // "Robert"
console.log(playerName); // "Robert" - works here too

// Function Scope

function calculateScore() {
    const score = 100; // Function-scoped variable
    console.log(score); // Works here
}

calculateScore(); // Shows: 100
console.log(score); // ERROR! score is not defined outside the function!

// The variable score only eixsts inside calculateScore!

function battle() {
    const enemy = "Wyvern";
    console.log(enemy); // Works, we are inside of the function
}

function explore() {
    console.log(enemy); // ERROR! Can't access enemy from another function!
}

battle(); // "Wyvern"
explore(): // ERROR!

// Block Scope

if (true) {
    const message = "Hello";
    console.log(message); // Works inside the block
}

console.log(message); // ERROR! message only exists inside the if block!

// same with loops!

for (let i = 0; i < 3; i++) {
    console.log(i); // works inside loop
}

console.log(i); // ERROR! i only exists inside the loop

// Scope Chain
// Functions can access variables from outer scopes, but not inner scopes:

const global = "I'm global";

function outer() {
    const outerVar = "I'm in outer";

    function inner() {
        const innerVar = "I'm in inner";

        console.log(global); // Can access global
        console.log(outer); // Can access outer function's variable
        console.log(inner); // Can access own variable
    }

    inner();
    console.log(innerVar); // ERROR! Can't access inner function's variable!
}

outer();

// Why Scope Matters:

// Good:

function calculateDamage() {
    const damage = 50;
    return damage;
}

function calculateHealing() {
    const damage = 30; // Different variable, no conflict!
    return damage;
}

// BAD:

let score = 0; // Global

function addPoints() {
    score += 10; // Modifying global variable
}

function resetScore() {
    score = 0; // Also modifying global variable
}

// This bad thing works, but it is bad because using lots of global variables makes code harder to manage

