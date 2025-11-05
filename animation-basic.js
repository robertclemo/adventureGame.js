const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

// Circle properties
let x = 100;
let y = 300;
let speedX = 2;
let speedY = 1.5;
const radius = 30;

// Animation Function
function animate() {
    // 1. Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Update position
    x += speedX;
    y += speedY;

    // 3. Bounce off edges
    if (x + radius > canvas.width || x - radius < 0) {
        speedX = -speedX; // Reverse direction
    }

    if(y + radius > canvas.height || y - radius < 0) {
        speedY = -speedY; // Reverse direction
    }

    // 4. Draw the circle
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    // 5. Call animate again (creates the loop)
    requestAnimationFrame(animate);
}

// Start the animation
animate();