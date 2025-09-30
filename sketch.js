let x = 50;
let speed = 5;
let colorValue = 128;
let speedSlider, colorSlider;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');
    background(220);

    // Get sliders from DOM
    speedSlider = select('#speedSlider');
    colorSlider = select('#colorSlider');
}

function draw() {
    background(220);

    // Read slider values
    speed = int(speedSlider.value());
    colorValue = int(colorSlider.value());

    // Update display values
    select('#speedValue').html(speed);
    select('#colorValue').html(colorValue);

    // Move circle
    x += speed;
    if (x > width + 50) x = -50;

    // Color interpolation: red to green
    let r = 255 - colorValue;
    let g = colorValue;
    fill(r, g, 0);
    ellipse(x, height/2, 100, 100);
}