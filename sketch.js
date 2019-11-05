var particles = [];

function setup() {
  createCanvas(800, 600);
  background(100);

  for (var i = 0; i < 100; i++) {
    particles.push(new Particle);
  }


}

function draw() {

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }


}

function Particle() {
  this.xPos = random(width);
  this.yPos = random(height);

  this.display = function () {
    circle(this.xPos, this.yPos, 10);
  }

}