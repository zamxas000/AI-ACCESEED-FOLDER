let circles = [];
let numCircles = 8;
let speedSlider, speedSlider2, colorSlider;
let colorValue = 128;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');
    background(220);

    // Get sliders from DOM
    speedSlider = select('#speedSlider');
    speedSlider2 = select('#speedSlider2');
    colorSlider = select('#colorSlider');

    // Create circles with random positions and directions
    for (let i = 0; i < numCircles; i++) {
        let angle = random(TWO_PI);
        let speed = random(2, 5);
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
    let speed1 = int(speedSlider.value());
    let speed2 = int(speedSlider2.value());
    colorValue = int(colorSlider.value());

    // Update display values
    select('#speedValue').html(speed1);
    select('#speedValue2').html(speed2);
    select('#colorValue').html(colorValue);

    // Color interpolation: red to yellow
    let r = 255;
    let g = colorValue;
    let b = 0;
    fill(r, g, b);

    // Move and draw circles
    for (let i = 0; i < circles.length; i++) {
        let c = circles[i];
        // Alternate speed control for variety
        let speed = (i % 2 === 0) ? speed1 : speed2;
        c.x += c.dx * speed;
        c.y += c.dy * speed;

        // Bounce off edges
        if (c.x - c.radius/2 <= 0) {
            c.dx = abs(c.dx);
            c.x = c.radius/2;
        }
        if (c.x + c.radius/2 >= width) {
            c.dx = -abs(c.dx);
            c.x = width - c.radius/2;
        }
        if (c.y < c.radius/2 || c.y > height - c.radius/2) c.dy *= -1;

        ellipse(c.x, c.y, c.radius, c.radius);
    }
}