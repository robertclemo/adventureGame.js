let health = 100;
let potions = 0;

while (health < 100) {
    health += 20;
    potions++;
    console.log(`Used potion #${potions}. Health: ${health}`);
}

console.log(`Fully healed with ${potions} potions!`);