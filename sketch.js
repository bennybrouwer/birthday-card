let canvas, graphics;
let angle = 0.0;

let hallo;

function setup() {
  canvas = createCanvas(400, 400, WEBGL);
  canvas.position(10, 10);
  graphics = createGraphics(400, 400);
  graphics.background(255);

  hallo = createGraphics(400, 400);
  hallo.fill(255);
  hallo.background(255, 155);
  hallo.textAlign(CENTER);
  hallo.textSize(64);
  hallo.text('Hallo', 150, 50);
}

function draw() {
  canvas.background(0, 100);
  hallo.fill(255, 0, 255);
  hallo.strokeWeight(1);
  hallo.stroke(0, 100);
  hallo.ellipse(mouseX, mouseY, 20);
  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, 1);

  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);

  // texture(graphics);
  texture(hallo);
  box(180);

  angle += 0.003;
}