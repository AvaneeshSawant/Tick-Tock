
var hr = hour();
var min = minute();
var sec = second();
var scAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(0);  


  scAngle = map(sc, 0, 60, 0, 360);

  push();
  stroke(255, 0, 0);
  strokeWeight(7);
  rotate(scAngle);
  line(0, 0, 100, 0);
  pop();

  drawSprites();
}