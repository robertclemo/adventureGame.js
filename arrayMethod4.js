// Array Method 4: find() - Find first match
const players = [
    { name: "Alice", score: 100 },
    { name: "Bob", score: 150 },
    { name: "Charlie", score: 200 }
];

// Find the first player with score > 120
const winner = players.find(player => player.score >120);

console.log(winner); // { name: "Bob", score: 150" }

