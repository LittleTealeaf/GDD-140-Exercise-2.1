/// <reference path="./libraries/p5.global-mode.d.ts" />

var x = 0;
var y = 0;
var dx = 1;
var dy = -1;
var radius = 25;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  //Set ellipse random starting place
  x = random(radius, 400 - radius);
  y = random(radius, 400 - radius);
  //Set ellipse random velocity
  dx = random(0, 3);
  dy = random(0, 3);
}

function draw() {
  background(220);
  updateEllipse();
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