let t =0;
let speed = 2;
let d = 40;
let xPos = 0; 
let yPos = 150;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  
  background(250);
  motion();
  t = t + 0.05;
  
}

function motion() {
  
   Car('orange', xPos, yPos);
  
   if (xPos > width) {
      xPos = 0;
    }
    xPos = xPos + speed;
  
}

function Car (carColor, xPos, yPos) {
  
    // The car
    fill(carColor);
    strokeWeight(2);
    rect(xPos, yPos, 150, 70);
    
    // The wheels
    backWheel = wheel(xPos, yPos+70);
    frontWheel  = wheel(xPos+150, yPos+70);
  
}

function wheel(cx, cy) {
    push();
    strokeWeight(5);
    fill('gray');
    circle(cx, cy, 40)
    translate(cx, cy);
    rotate(t);
    line(0, d/2, 0, -d/2)
    line(d/2, 0, -d/2, 0)
    pop();
}
