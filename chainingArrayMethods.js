const scores = [45, 120, 85, 200, 150, 30];

// Get high scores, double them, then sum
const result = scores
    .filter(score => score >= 100) // [120, 200, 150]
    .map(score => score * 2) // [240, 400, 300]
    .reduce((sum, score) => sum + score, 0); // 940

console.log(result); // 940