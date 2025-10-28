// Exercise # 11: Array Methods Practice

// Given this array of enemy data:

const enemies = [
    { name: "Goblin", points: 10, difficulty: "easy" },
    { name: "Orc", points: 15, difficulty: "medium" },
    { name: "Troll", points: 20, difficulty: "medium" },
    { name: "Dragon", points: 30, difficulty: "hard" },
    { name: "Skeleton", points: 12, difficulty: "easy" }
];

// 1. Get all names
const names = enemies.map(enemy => enemy.name); 
    
// 2. Get hard enemies
const hardEnemies = enemies.filter(enemy => enemy.difficulty === "hard");

// 3. Get enemies worth 15+ points
const valuableEnemies = enemies.filter(enemy => enemy.points >= 15);

// 4. Total points
const totalPoints = enemies.reduce((sum, enemy) => sum + enemy.points, 0);

// 5. Find first enemy > 15 points
const strongEnemy = enemies.find(enemy => enemy.points > 15);

// Test your answers
console.log("Names:", names);
console.log("Hard enemies:", hardEnemies);
console.log("Valuable enemies:", valuableEnemies);
console.log("Total points:", totalPoints);
console.log("Strong enemy:", strongEnemy);