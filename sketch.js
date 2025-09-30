function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');
    background(220);
}

function draw() {
    fill(100, 150, 255);
    ellipse(width/2, height/2, 100, 100);
}