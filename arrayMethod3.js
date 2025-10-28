// Array Method 3: filter() - Keep only SOME items

// filter() creates a new array with only items that pass a test:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Keep only even numbers
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6, 8, 10]

// Game example:

const scores = [45, 120, 85, 200, 150, 30];

// Get only high scores (100+)
const highScores = scores.filter(score => score >= 100);

console.log(highScores); // [120, 200, 150]