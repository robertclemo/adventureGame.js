function createGreeting(greeting) {
    // This function returns another function
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

sayHello("Robert");
sayHello("Alice");
sayHi("Charlie");

// Practical Example: Counter

function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++;
        console.log(`Count: ${count}`);
    };
}

const counter1 = createCounter();
counter1(); // Count 1
counter1(); // Count 2
counter1(); // Count 3

const counter2 = createCounter();
counter2(); // Count: 1 (separate counter!)
counter2(); // Count: 2

// Game Example:

// Create Powerups

function createPowerup(name, bonus) {
    return function(currentScore) {
        const newScore = currentScore + bonus;
        console.log(`${name} activated! Score: ${currentScore} => ${newScore}`);
    };
}

const doublePoints = createPowerup("Double Points", 50);
const megaBonus = createPowerup("Mega Bonus", 100);

let score = 100;
score = doublePoints(score); // Double Points activated! Score: 100 => 150"
score = megaBonus(score); // Mega Bonus activated! Score 150 => 250"

function setupButton(buttonId, message) {
    // When button is clicked, it will remember 'message'
    return function() {
        console.log(message);
    };
}

const button1Handler = setupButton("btn1", "Button 1 clicked!!");
const button2Handler = setupButton("btn2", "Button 2 clicked!");

//Later, when buttons are clicked:
button1Handler(); // "Button 1 clicked"
button2Handler(); // "Button 2 clicked"



