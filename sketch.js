let size = 100;

function preload() {
  img = loadImage('AOC.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER);
  angleMode(DEGREES);
  a = 0;
}

function draw() {
  background(0);
  pointLight(255, 255, 255, -width, -height, 200);
  pointLight(255, 255, 255, width, -height, 200);
  specularMaterial(255, 255, 255);
  //normalMaterial();
  texture(img);
  noStroke();
  rotateX(mouseY);
  rotateY(mouseX);
  rotateZ(a);
  a+=.5;
  box(size, size, size);
  if (mouseIsPressed) {
    size-= mouseY-pmouseY;
  }
}
