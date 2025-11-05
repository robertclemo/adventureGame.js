const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Mouse position
const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

// Track mouse movement
canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Particle array
const particles = [];
const particleCount = 100;

// Create particles
for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,  // "Home" position
        baseY: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}

// Animation loop
function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        // Calculate distance from mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If mouse is close, push particle away
        if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - distance) / 100;  // Stronger when closer
            
            particle.x -= Math.cos(angle) * force * 5;
            particle.y -= Math.sin(angle) * force * 5;
        } else {
            // Slowly return to base position
            particle.x += (particle.baseX - particle.x) * 0.05;
            particle.y += (particle.baseY - particle.y) * 0.05;
        }
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
    });
    
    requestAnimationFrame(animate);
}

animate();