// Variables that don't change - use const
const myName = "Robert"; // Your name won't suddenly change mid-program
const birthYear = 1988;
const isProgrammer = true;

console.log(myName);
console.log(birthYear);
console.log(isProgrammer);

// Variables that DO change - use let
let score = 0;
console.log("Starting score:", score);

score = 10; // Reassigning - this is why we need 'let'
console.log("New score:", score);

score = score + 5; // We can use the old value to calculate the new one
console.log("Final score:", score);

const favoriteColor = "green";
let currentEnergyLevel = 9;
const likePizza = true;

console.log("Favorite Color:", favoriteColor);
console.log("Current Energy Level:", currentEnergyLevel);
console.log("Likes Pizza:", likePizza);

console.log("Current Energy Level:", currentEnergyLevel);
currentEnergyLevel = 7; // Energy level changed after a workout
console.log("Updated Energy Level:", currentEnergyLevel);


// 1. STRING - text in quotes
const firstName = "Robert";
const lastName = 'Clemo'; // Single or double quotes both work
const message = `Hello, ${firstName}!`; // Backticks let you embed variables!

console.log(message); // "Hello, Robert!"

// 2. NUMBER - integers and decimals (no separate 'float' like Python!)
const age = 37; // Integer
const price = 20.99; // Decimal number
const temperature = -5; // Negative number

// 3. BOOLEAN - true or false
const isStudent = true;
const hasLearnedJavaScript = false;

// 4. UNDEFINED - variable declared but not assigned
let futureValue;
console.log(futureValue); // undefined

// 5. NULL - intentionally empty
const emptyBox = null; // "Nothing here on purpose"

const name = "Robert";

// Old way (concatenation)
console.log("My name is " + name + " and I am " + age + " years old.");

// New way (template literals with backticks)
console.log(`My name is ${name} and I am ${age} years old.`);

// You can even do math inside ${}
console.log(`Next year I'll be ${age + 1} years old!`);

console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof {}); // "object"

const username = "rclemo";
let accountAge = 2; // in years
let accountBalance = 150.75; // in dollars
let isVerified = false;
const profileBio = null; // no bio set yet

console.log(`User ${username} has been a member for ${accountAge} years and has ${accountBalance} dollars in their account.`);
console.log(typeof username); // string
console.log(typeof accountAge); // number
console.log(typeof accountBalance); // number
console.log(typeof isVerified); // boolean
console.log(typeof profileBio); // object (because it's null)

