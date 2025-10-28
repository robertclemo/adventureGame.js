const particle = { x: 100, y: 200, color: "green", isMoving: true };
let speed = 50;

particle.x = 150;           // Allowed: mutate property
console.log(particle.x);    // 150

// particle = { x: 999 };   // Uncomment → ERROR!