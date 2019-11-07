var particles = [];

function setup() {
  createCanvas(800, 800);
  noStroke();
  smooth();


}

function draw() {
  background(0);

  if (frameCount % 10) {
    particles.push(new Particle);
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

}

function Particle() {
  this.xPos = random(width);
  this.cSize = random(1, 10);
  this.yPos = height + this.cSize;
  this.cColor = random(255);
  this.cSpeed = random(50);

  this.display = function () {
    fill(map(this.yPos, 0, height, 100, 255));
    this.yPos = this.yPos - this.cSpeed;
    // this.xPos = this.xPos + this.yPos / 200;
    this.cSpeed = map(this.yPos, 0, height, 0, 20)
    circle(this.xPos, this.yPos, this.cSize);
  }
}
