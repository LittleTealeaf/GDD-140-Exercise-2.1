/// <reference path="./libraries/p5.global-mode.d.ts" />


/*
Code hosted on Github
https://github.com/LittleTealeaf/GDD-140-Exercise-2.1

All code is created by Thomas Kwashnak
*/

//Current x and y
var x = 0;
var y = 0;
//Current velocity
var dx = 0;
var dy = 0;
//Current Radius
var radius = 0;
//Goal Radius
var goalRadius = 0;
//Current color
var fillR = 0;
var fillG = 0;
var fillB = 0;
//Goal Color
var fillRGoal = 0;
var fillGGoal = 0;
var fillBGoal = 0;

/**
 * Transparency
 * This had originally been a randomized variable, however lower values tended to make the image not look as good
 */
var transparency = 0;

function setup() {
  //Create canvas
  createCanvas(500,500);

  //Set rect and ellipse modes
  rectMode(CENTER);
  ellipseMode(CENTER);

  //Set ellipse random starting place
  x = random(radius, width - radius);
  y = random(radius, height - radius);

  //Set ellipse random velocity
  dx = random(-1,1);
  dy = random(-1,1);

  //Set random transparency
  transparency = 100;

  //Initial background
  background(220);

  //No borders!!
  noStroke();
}

function draw() {
  //Only update radius every other frame
  if(frameCount%2==0) {
    updateRadius();
  }
  //To speed up drawing, iterate 10 times as fast for drawing
  for(var i = 0; i < 10; i++) {
    //Every other time, update the fill color
    if(i%2==0) {
      updateFill();
    }
    //Update and draw the ellipse
    updateEllipse();
  }
}

/**
 * Updates the fill color, changing values to get closer to the "goal" value, and setting new "goal" values once that color has been acheived.
 */
function updateFill() {
  //Update red component
  if(fillR > fillRGoal) {
    fillR--;
  } else if(fillR < fillRGoal) {
    fillR++;
  } else {
    fillRGoal = int(random(255));
  }

  //Update green component
  if(fillG > fillGGoal) {
    fillG--;
  } else if(fillG < fillGGoal) {
    fillG++;
  } else {
    fillGGoal = int(random(255));
  }

  //Update blue component
  if(fillB > fillBGoal) {
    fillB--;
  } else if(fillB < fillBGoal) {
    fillB++;
  } else {
    fillBGoal = int(random(255));
  }

  //Set current fill
  fill(fillR,fillG,fillB,transparency);
}

/**
 * Update and draw the ellipse
 */
function updateEllipse() {
  x += dx;
  y += dy;
  //If the ellipse hits the left or right wall, set the direction to the other way
  if (x <= radius) {
    dx = random(0,1);
  } else if (x >= width - radius) {
    dx = -random(0,1);
  }

  //If the ellipse hits the top or bottom wall, set the other direction
  if (y <= radius) {
    dy = random(0,1);
  } else if (y >= height - radius) {
    dy = -random(0,1);
  }

  //draws the ellipse
  ellipse(x, y, radius * 2, radius * 2);
}

/**
 * Updates the current radius of the circle
 */
function updateRadius() {
  if(radius > goalRadius) {
    radius--;
  } else if(radius < goalRadius) {
    radius++;
  } else {
    goalRadius = int(random(width / 6))
  }
}