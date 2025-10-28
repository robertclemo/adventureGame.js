// Function Declaration
function greet() {
    console.log("It's not safe to go alone. Here, take this!");
}

// Calling (using) the function
greet(); // Output: "It's not safe to go alone. Here, take this!"

// Functions with parameters (inputs)
function greet(name) { // 'name' is a parameter
    console.log(`Hello, ${name}!`);
}

greet("Gandalf"); // Output: "Hello, Gandalf!"
greet("Frodo"); // Output: "Hello, Frodo!"
greet("Sam"); // Output: "Hello, Sam!"

function calculateDamage(baseDamage, multiplier) {
    let totalDamage = baseDamage * multiplier;
    console.log(`Total damage: ${totalDamage}`);
}

calculateDamage(10,2); // Output: Total damage: 20"
calculateDamage(15, 1.5); // Output: Total damage: 22.5"

// Parameters are separated by commas

// Functions with return values (outputs)
function add(a,b) {
    return a + b; // send this value back
}

let sum = add(5,3); // sum = 8
console.log(sum); // Output: 8

let total = add(5, 10) // total = 15
console.log(total); // Output: 15

// The key concept here is that 'return' sends a value back to wherever the function was called.

// Return stops the function.
// Once you hit return, the function exits immediately.

function checkAge(age) {
    if (age < 18) {
        return "Too young"; // Function stops here if true
    }
    return "Old enough"; // Only runs if age >= 18
}

console.log(checkAge(15)); // "Too young"
console.log(checkAge(25)); // "Old enough"

