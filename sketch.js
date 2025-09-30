let circles = [];
let numCircles = 8;
let speedSlider, colorSlider;
let colorValue = 128;
// ...existing code...

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');
    background(220);

    // Get sliders from DOM
    speedSlider = select('#speedSlider');
    colorSlider = select('#colorSlider');

    // Create circles with random positions and directions
    for (let i = 0; i < numCircles; i++) {
        let angle = random(TWO_PI);
        let minSpeed = 2;
        let maxSpeed = 5;
        let speed = random(minSpeed, maxSpeed);
        let dx = cos(angle) * speed;
        let dy = sin(angle) * speed;
        circles.push({
            x: random(50, width-50),
            y: random(50, height-50),
            dx: dx,
            dy: dy,
            radius: random(15, 30)
        });
    }
}

function draw() {
    background(220);

    // Read slider values
    let speed = int(speedSlider.value());
    colorValue = int(colorSlider.value());

    // Update display values
    select('#speedValue').html(speed);
    select('#colorValue').html(colorValue);

    // Color interpolation: red to green
    let r = 255 - colorValue;
    let g = colorValue;
    fill(r, g, 0);

    // Move and draw circles
    for (let c of circles) {
        c.x += c.dx * speed;
        c.y += c.dy * speed;

        // Bounce off left side
        if (c.x - c.radius/2 <= 0) {
            c.dx = abs(c.dx); // Move right
            c.x = c.radius/2; // Prevent sticking
        }
        // Bounce off right side
        if (c.x + c.radius/2 >= width) {
            c.dx = -abs(c.dx); // Move left
            c.x = width - c.radius/2; // Prevent sticking
        }
        // Bounce off top/bottom
        if (c.y < c.radius/2 || c.y > height - c.radius/2) c.dy *= -1;
        ellipse(c.x, c.y, c.radius, c.radius);
    }

    // ...existing code...
}