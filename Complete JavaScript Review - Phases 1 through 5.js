📚 Complete JavaScript Review - Phases 1-5
Let's do a comprehensive review of everything you've learned so far! I'll organize this by concept, give you quick examples, and point out what's most important for your goals.

🎯 PHASE 1: JavaScript Foundations
1. Variables - How to Store Data
javascript// const - Can't be reassigned (use for most things)
const playerName = 'Robert';
const maxHealth = 100;

// let - Can be reassigned (use for changing values)
let score = 0;
let health = 100;
score = 50;  // ✅ This works

// var - Old way, avoid using it
var oldStyle = 'avoid this';
When to use what:

const - 95% of the time (arrays, objects, functions, fixed values)
let - Only when the value needs to change (counters, game stats)
var - Never use it


2. Data Types - What Kind of Data
javascript// String - Text
const name = "Robert";
const message = 'Hello';
const template = `Score: ${score}`;  // Template literal with backticks

// Number - Both integers and decimals
const score = 100;
const health = 99.5;

// Boolean - True or false
const isAlive = true;
const gameOver = false;

// Null - Intentionally empty
let enemy = null;

// Undefined - Not assigned yet
let weapon;
console.log(weapon);  // undefined

// Checking types
console.log(typeof score);  // "number"
console.log(typeof name);   // "string"
Key Point: Template literals (backticks) let you insert variables: `Hello ${name}`

3. Operators - Math and Assignment
javascript// Arithmetic
let x = 10 + 5;   // 15
let y = 10 - 5;   // 5
let z = 10 * 5;   // 50
let w = 10 / 5;   // 2
let remainder = 10 % 3;  // 1 (modulo - gives remainder)

// Assignment shortcuts
score += 10;  // Same as: score = score + 10
health -= 5;  // Same as: health = health - 5
score *= 2;   // Same as: score = score * 2

// Increment/Decrement
count++;  // Add 1
count--;  // Subtract 1

🎯 PHASE 2: Control Flow
4. Comparison Operators
javascript// Equality (ALWAYS use === not ==)
score === 100    // true if exactly equal
score !== 100    // true if not equal

// Comparison
score > 50       // Greater than
score < 50       // Less than
score >= 50      // Greater than or equal
score <= 50      // Less than or equal
Critical: Always use === (strict equality), never == (loose equality)

5. If/Else Statements
javascript// Basic if
if (health <= 0) {
    console.log('Game Over!');
}

// If/else
if (score > 100) {
    console.log('High score!');
} else {
    console.log('Keep trying!');
}

// If/else if/else
if (score >= 200) {
    console.log('S Rank!');
} else if (score >= 150) {
    console.log('A Rank!');
} else if (score >= 100) {
    console.log('B Rank!');
} else {
    console.log('F Rank');
}

6. Logical Operators
javascript// && - AND (both must be true)
if (score > 100 && health > 50) {
    console.log('Strong and healthy!');
}

// || - OR (at least one must be true)
if (score > 200 || health < 20) {
    console.log('Extreme situation!');
}

// ! - NOT (reverses the boolean)
if (!gameOver) {
    console.log('Game is still running');
}

// Complex conditions
if ((score > 100 && health > 50) || hasShield) {
    console.log('You can survive!');
}

7. Loops - Repeating Code
javascript// For loop - When you know how many times
for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
}

// While loop - When you don't know how many times
while (health > 0) {
    health -= 10;
    console.log(`Health: ${health}`);
}

// For...of loop - Iterating through arrays
const enemies = ['Goblin', 'Orc', 'Dragon'];
for (const enemy of enemies) {
    console.log(`Fighting ${enemy}`);
}

8. Switch Statements
javascriptfunction getEnemyPoints(enemyName) {
    switch (enemyName) {
        case 'Goblin':
            return 10;
        case 'Orc':
            return 15;
        case 'Dragon':
            return 30;
        default:
            return 5;
    }
}

// Same as multiple if/else, but cleaner

🎯 PHASE 3: Functions
9. Function Declarations
javascript// Traditional function
function greet(name) {
    return `Hello, ${name}!`;
}

const message = greet('Robert');  // "Hello, Robert!"

// Function with multiple parameters
function calculateDamage(baseDamage, multiplier) {
    return baseDamage * multiplier;
}

const damage = calculateDamage(10, 2);  // 20

10. Arrow Functions - Modern Syntax
javascript// Traditional
function add(a, b) {
    return a + b;
}

// Arrow function - multi-line
const add = (a, b) => {
    return a + b;
};

// Arrow function - one-liner (implicit return)
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const double = x => x * 2;

// No parameters
const getRandom = () => Math.random();
When to use arrow functions:

Array methods (map, filter, etc.)
Callbacks and event handlers
Any time you want concise syntax


11. Scope - Where Variables Live
javascript// Global scope - accessible everywhere
const globalVar = 'I am global';

function myFunction() {
    // Function scope - only inside this function
    const functionVar = 'Only in function';
    
    if (true) {
        // Block scope - only inside this block
        const blockVar = 'Only in block';
        console.log(globalVar);     // ✅ Works
        console.log(functionVar);   // ✅ Works
        console.log(blockVar);      // ✅ Works
    }
    
    console.log(blockVar);  // ❌ Error - blockVar doesn't exist here
}

console.log(functionVar);  // ❌ Error - functionVar doesn't exist here
Key Rule: Variables are only accessible in the scope where they're defined and any inner scopes.

12. Closures - Functions That Remember
javascriptfunction createCounter() {
    let count = 0;  // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
console.log(counter.getCount());  // 2

// You can't access count directly
console.log(counter.count);  // undefined
Why closures matter:

Create private variables
Maintain state between function calls
Used heavily in React and modern JavaScript


🎯 PHASE 4: Data Structures
13. Arrays - Lists of Data
javascript// Creating arrays
const enemies = ['Goblin', 'Orc', 'Troll'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null];

// Accessing elements (0-indexed)
console.log(enemies[0]);  // 'Goblin'
console.log(enemies[2]);  // 'Troll'

// Array properties
console.log(enemies.length);  // 3

// Adding/removing
enemies.push('Dragon');     // Add to end
enemies.pop();              // Remove from end
enemies.unshift('Rat');     // Add to beginning
enemies.shift();            // Remove from beginning

14. Array Methods - The Power Tools
javascriptconst numbers = [1, 2, 3, 4, 5];

// forEach - Do something with each item
numbers.forEach(num => {
    console.log(num * 2);
});

// map - Transform each item, create new array
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter - Keep only items that pass a test
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

// find - Get first item that passes a test
const found = numbers.find(num => num > 3);
// 4

// reduce - Combine all items into one value
const sum = numbers.reduce((total, num) => total + num, 0);
// 15

// Method chaining
const result = numbers
    .filter(num => num > 2)    // [3, 4, 5]
    .map(num => num * 2)       // [6, 8, 10]
    .reduce((sum, num) => sum + num, 0);  // 24
Most important for animation: map() and forEach() - you'll use these constantly!

15. Objects - Grouped Data
javascript// Creating objects
const player = {
    name: 'Robert',
    health: 100,
    score: 0,
    isAlive: true
};

// Accessing properties
console.log(player.name);      // 'Robert' (dot notation)
console.log(player['health']); // 100 (bracket notation)

// Modifying properties
player.score = 50;
player.health -= 10;

// Adding new properties
player.level = 5;

// Deleting properties
delete player.isAlive;

16. Object Methods
javascriptconst character = {
    name: 'Robert',
    health: 100,
    
    // Method (function inside object)
    takeDamage: function(amount) {
        this.health -= amount;
    },
    
    // Modern shorthand
    heal(amount) {
        this.health += amount;
        if (this.health > 100) {
            this.health = 100;
        }
    },
    
    // Arrow function (careful with 'this'!)
    getStatus: () => {
        return `Health: ${this.health}`;  // 'this' doesn't work here!
    }
};

character.takeDamage(20);  // health becomes 80
character.heal(30);         // health becomes 100
Critical: Use regular functions (not arrow functions) for methods that need this

17. Object Utility Methods
javascriptconst player = {
    name: 'Robert',
    score: 100,
    level: 5
};

// Get all keys
const keys = Object.keys(player);
// ['name', 'score', 'level']

// Get all values
const values = Object.values(player);
// ['Robert', 100, 5]

// Get key-value pairs
const entries = Object.entries(player);
// [['name', 'Robert'], ['score', 100], ['level', 5]]

// Looping through object
for (const [key, value] of Object.entries(player)) {
    console.log(`${key}: ${value}`);
}

18. JSON - Data Exchange Format
javascriptconst gameData = {
    player: 'Robert',
    score: 100,
    items: ['sword', 'potion']
};

// Object → JSON string (for saving/sending)
const jsonString = JSON.stringify(gameData);
// '{"player":"Robert","score":100,"items":["sword","potion"]}'

// JSON string → Object (for loading/receiving)
const loadedData = JSON.parse(jsonString);
// Back to original object

// Pretty print JSON
const prettyJson = JSON.stringify(gameData, null, 2);
Why JSON matters:

Saving game data to localStorage
Sending data to APIs
Configuration files


🎯 PHASE 5: DOM Manipulation
19. Selecting Elements
javascript// By ID (most common)
const button = document.getElementById('my-button');

// By querySelector (most flexible)
const button = document.querySelector('#my-button');      // ID
const div = document.querySelector('.container');         // Class
const heading = document.querySelector('h1');             // Tag

// Select multiple elements
const buttons = document.querySelectorAll('.button');    // NodeList
const divs = document.getElementsByClassName('box');     // HTMLCollection
Best practice: Use querySelector and querySelectorAll - they're the most flexible

20. Changing Content
javascriptconst element = document.querySelector('#message');

// Change text only (safe, recommended)
element.textContent = 'Hello World';

// Change HTML (can include tags, use carefully)
element.innerHTML = '<strong>Bold text</strong>';

// Get/set input values
const input = document.querySelector('#name-input');
const name = input.value;         // Get value
input.value = 'New name';         // Set value

21. Changing Styles
javascriptconst box = document.querySelector('#box');

// Individual styles
box.style.color = '#ff0000';
box.style.backgroundColor = '#000000';  // Note: camelCase for CSS properties
box.style.fontSize = '20px';
box.style.display = 'none';   // Hide
box.style.display = 'block';  // Show

// Multiple styles
Object.assign(box.style, {
    color: '#ff0000',
    fontSize: '20px',
    padding: '10px'
});
CSS Property Names in JavaScript:

background-color → backgroundColor
font-size → fontSize
border-radius → borderRadius


22. CSS Classes (Better Than Inline Styles)
javascriptconst element = document.querySelector('#box');

// Add a class
element.classList.add('active');

// Remove a class
element.classList.remove('active');

// Toggle a class (add if missing, remove if present)
element.classList.toggle('active');

// Check if has class
if (element.classList.contains('active')) {
    console.log('Element is active!');
}

// Add multiple classes
element.classList.add('active', 'highlighted', 'large');
Why classes are better:

Keeps styling in CSS where it belongs
Can change multiple styles at once
Easier to maintain and reuse


23. Creating Elements
javascript// Create new element
const newDiv = document.createElement('div');

// Set its content
newDiv.textContent = 'Hello!';

// Set its attributes
newDiv.id = 'my-div';
newDiv.className = 'box';

// Set styles
newDiv.style.color = '#ff0000';

// Add it to the page
const container = document.querySelector('#container');
container.appendChild(newDiv);        // Add to end
container.prepend(newDiv);            // Add to beginning
container.insertBefore(newDiv, ref);  // Add before another element

24. Removing Elements
javascript// Remove specific element
const element = document.querySelector('#old-element');
element.remove();  // Modern way

// Remove all children
const container = document.querySelector('#container');
container.innerHTML = '';  // Nuclear option - removes everything

// Remove specific child
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
parent.removeChild(child);  // Old way

25. Event Listeners - Making Things Interactive
javascriptconst button = document.querySelector('#my-button');

// Click event
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Multiple event types
input.addEventListener('input', handleInput);      // As user types
input.addEventListener('change', handleChange);    // When finished editing
input.addEventListener('focus', handleFocus);      // When clicked into
input.addEventListener('blur', handleBlur);        // When clicked out

// Mouse events
element.addEventListener('mouseenter', () => {});  // Mouse enters
element.addEventListener('mouseleave', () => {});  // Mouse leaves
element.addEventListener('mousemove', () => {});   // Mouse moves

// Keyboard events
document.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Remove event listener
button.removeEventListener('click', handleClick);
Common Events:

click - Element clicked
input - Input value changes (real-time)
change - Input value changes (on blur)
submit - Form submitted
keydown / keyup - Keyboard keys
mouseenter / mouseleave - Mouse movement


26. Event Objects
javascriptbutton.addEventListener('click', (event) => {
    console.log(event.target);        // Element that was clicked
    console.log(event.type);          // 'click'
    event.preventDefault();           // Stop default behavior
    event.stopPropagation();          // Stop event bubbling
});

// Keyboard events
document.addEventListener('keydown', (e) => {
    console.log(e.key);               // 'a', 'Enter', 'ArrowUp', etc.
    console.log(e.code);              // 'KeyA', 'Enter', 'ArrowUp'
    console.log(e.ctrlKey);           // true if Ctrl held
    console.log(e.shiftKey);          // true if Shift held
});

// Mouse events
element.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);  // Mouse position
    console.log(e.button);              // Which mouse button
});

🎯 CRITICAL CONCEPTS FOR PARTICLE ANIMATION
These are the absolute essentials for your goal:
✅ Must Know Cold:

Arrow functions - You'll write hundreds of these

javascript   particles.forEach(particle => particle.update());

Array methods (map, filter, forEach) - Animation loop core

javascript   particles = particles.filter(p => p.isAlive);

Objects - Each particle is an object

javascript   const particle = { x: 100, y: 200, speed: 5 };

querySelector - Finding the canvas

javascript   const canvas = document.querySelector('#canvas');

Event listeners - Mouse tracking, keyboard input

javascript   canvas.addEventListener('mousemove', handleMouse);

For loops - Drawing all particles

javascript   for (let i = 0; i < particles.length; i++) { ... }

Creating elements - You've mastered this!

javascript   const particle = document.createElement('div');

🧪 Quick Self-Test
Let me ask you a few questions to see what might need more practice:
Question 1: What's wrong with this code?
javascriptconst score = 100;
score = 150;
<details>
<summary>Answer</summary>
`const` variables can't be reassigned. Should use `let` instead.
</details>
Question 2: What does this return?
javascriptconst numbers = [1, 2, 3, 4, 5];
const result = numbers.filter(n => n > 2).map(n => n * 2);
<details>
<summary>Answer</summary>
`[6, 8, 10]` - Filters to [3, 4, 5], then doubles each to [6, 8, 10]
</details>
Question 3: What's the difference?
javascriptelement.textContent = '<strong>Bold</strong>';
element.innerHTML = '<strong>Bold</strong>';
<details>
<summary>Answer</summary>
`textContent` shows literally: `<strong>Bold</strong>`
`innerHTML` renders as HTML: **Bold**
</details>
Question 4: When should you use arrow functions for object methods?
javascriptconst obj = {
    name: 'Robert',
    greet: () => console.log(this.name)
};
<details>
<summary>Answer</summary>
**Never** use arrow functions for object methods if you need `this`. Arrow functions don't have their own `this`. Use regular functions instead.
</details>

💭 What Do YOU Feel Needs More Practice?
Now that we've reviewed everything, what topics do you feel least confident about?
Or are you feeling solid and ready to continue building more complex DOM manipulation with Exercise 16?
Let me know what you'd like to focus on! 🎯