
let circles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      r: random(20, 50),
      dx: random(-2, 2),
      dy: random(-2, 2)
    });
  }
}

function draw() {
  background(51);
  fill(255, 0, 100);
  noStroke();
  for (let c of circles) {
    ellipse(c.x, c.y, c.r, c.r);
    c.x += c.dx;
    c.y += c.dy;
    // Bounce off edges
    if (c.x < c.r/2 || c.x > width - c.r/2) c.dx *= -1;
    if (c.y < c.r/2 || c.y > height - c.r/2) c.dy *= -1;
  }
}
