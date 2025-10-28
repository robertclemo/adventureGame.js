const score = 150;

switch (true) {
    case score >= 200:
        console.log("S Rank");
        // No break - keeps going!
    case score >= 150:
        console.log("A Rank");  // This runs too!
        // No break - keeps going!
    case score >= 100:
        console.log("B Rank");  // This also runs!
        break;
}

// Output:
// A Rank
// B Rank