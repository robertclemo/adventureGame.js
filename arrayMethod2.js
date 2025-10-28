// Array Method 2: map() - Transform each item

const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] - original unchanged!

// Real game example:

const enemyNames = ["Goblin", "Orc", "Troll"];

// Add "Defeated" to each name

const defeated = enemyNames.map(name => `Defeated ${name}!`);

console.log(defeated);
// ["Defeated Goblin!", "Defeated Orc!", "Defeated Troll!"]

