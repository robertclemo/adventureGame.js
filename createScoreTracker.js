function createScoreTracker(playerName) {
    let score = 0;
    
    return {
        addPoints: function(points) {
            score += points;
            console.log(`${playerName} earned ${points}! Total: ${score}`);
        },
        getScore: function() {
            return score;
        }
    };
}

// Create two players
const playerA = createScoreTracker("Alice");
const playerB = createScoreTracker("Bob");

// Test playerA
playerA.addPoints(10);  // "Alice earned 10! Total: 10"
playerA.addPoints(20);  // "Alice earned 20! Total: 30"
console.log(playerA.getScore());  // 30

// Test playerB
playerB.addPoints(15);  // "Bob earned 15! Total: 15"
console.log(playerB.getScore());  // 15

// Test accessing score directly (closure privacy)
console.log(playerA.score);  // undefined - score is private!