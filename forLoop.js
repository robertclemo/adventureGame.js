for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}

// Output:
// Loop iteration: 0
// Loop iteration: 0
// Loop iteration: 1
// Loop iteration: 2
// Loop iteration: 3
// Loop iteration: 4

/*
for (initialization; condition; increment) {
    // Code to repeat
}
*/
/*
// Counting Backwards:

for (let i = 5; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}
console.log("Blast off!");
*/

// Looping Through Arrays:
const weapons = ["sword", "bow", "staff", "dagger"];

// Loop through each weapon
for (let i = 0; i < weapons.length; i++) {
    console.log(`Weapon ${i + 1}: ${weapons[i]}`);
}
