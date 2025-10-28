// Array Method 5: reduce() - combine into a single value

// reduce() is powerful. It "reduces" an array to a single value

const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
//                   accumulator current operation    starting value

console.log(sum); // 15

// How it works:

/*
1. Start with 0 (the starting value)
2. Add first number: 0 + 1 = 1
3. Add second number: 1 + 2 = 3
4. Add third number: 3 + 3 = 6
5. And so on...

Game Example:
*/

const enemyPoints = [10, 15, 20, 30];

const totalPoints = enemyPoints.reduce((sum, points) => sum + points, 0);

console.log(totalPoints); // 75