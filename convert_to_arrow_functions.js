function multiplyByTwo(num) {
    return num * 2;
}

function getGreeting(name) {
    return `Hello, ${name}`;
}

function calculateScore(points, bonus) {
    const total = points + bonus;
    return total;
}

console.log(multiplyByTwo(5)); // Should show 10
console.log(getGreeting("Alice")); // Should show "Hello Alice"
console.log(calculateScore(100, 50)); // Should show 150

const multiplyByTwo = (num) => {
    return num * 2;
}

const getGreeting = (name) => {
    return `Hello, ${name}!`;
}

const calculateScore = (points, bonus) => {
    const total = points + bonus;
    return total;
}

const multiplyByTwo = (num) => num * 2;
const getGreeting = (name) => `Hello, ${name}!`;
const calculateScore = (points, bonus) => points + bonus;

console.log(multiplyByTwo(10));
console.log(getGreeting("Robert"));
console.log(calculateScore(100, 50));