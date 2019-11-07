var particles = [];

function setup() {
  createCanvas(800, 600);
  background(10, 20, 60);
  noStroke();
  smooth();


}

function draw() {

  // for (var i = 0; i < 100; i++) {
  if (frameCount % 60) {
    particles.push(new Particle);
  }
  // }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

}

function Particle() {
  this.xPos = random(width);
  this.yPos = height;
  this.cSize = random(5, 20);
  this.cColor = random(255);

  this.display = function () {
    fill(this.cColor);
    this.yPos = this.yPos - 1;
    circle(this.xPos, this.yPos, this.cSize);
  }
}
