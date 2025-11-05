// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the "context" - this is what we use to draw
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Draw a rectangle
ctx.fillStyle = '#4CAF50'; // Green color
ctx.fillRect(100, 100, 200, 150);
//           x     y  width height

// Draw a circle
ctx.fillStyle = '#FFD700'; // Gold color
ctx.beginPath();
ctx.arc(500, 300, 80, 0, Math.PI * 2);
//      x    y    radius startAngle endAngle
ctx.fill();

// Draw text
ctx.fillStyle = '#FFFFFF'; // White color
ctx.font = '30px Arial';
ctx.fillText('Hello Canvas!', 250, 500);
//            text             x    y

