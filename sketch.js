/// <reference path="./libraries/p5.global-mode.d.ts" />

var x = 0;
var y = 0;
var dx = 0;
var dy = 0;
var radius = 25;
var fillR = 0;
var fillG = 0;
var fillB = 0;
var fillRGoal = 0;
var fillGGoal = 0;
var fillBGoal = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  //Set ellipse random starting place
  x = random(radius, 400 - radius);
  y = random(radius, 400 - radius);
  //Set ellipse random velocity
  dx = random(-5, 5);
  dy = random(-5, 5);
  background(220);
  noStroke();
}

function draw() {
  updateFill();
  updateEllipse();
}

function updateFill() {
  //Update red component. If it has reached the red component, then make a new goal
  if(fillR > fillRGoal) {
    fillR--;
  } else if(fillR < fillRGoal) {
    fillR++;
  } else {
    fillRGoal = int(random(255));
  }
  if(fillG > fillGGoal) {
    fillG--;
  } else if(fillG < fillGGoal) {
    fillG++;
  } else {
    fillGGoal = int(random(255));
  }
  if(fillB > fillBGoal) {
    fillB--;
  } else if(fillB < fillBGoal) {
    fillB++;
  } else {
    fillBGoal = int(random(255));
  }

  fill(fillR,fillG,fillB);
}

function updateEllipse() {
  x += dx;
  y += dy;
  //If the ellipse hits the left or right wall, set the direction to the other way
  if (x <= radius) {
    dx = Math.abs(dx);
  } else if (x >= width - radius) {
    dx = -Math.abs(dx);
  }
  //If the ellipse hits the top or bottom wall, set the other direction
  if (y <= radius) {
    dy = Math.abs(dy);
  } else if (y >= height - radius) {
    dy = -Math.abs(dy);
  }
  //draws the ellipse
  ellipse(x, y, radius * 2, radius * 2);
}