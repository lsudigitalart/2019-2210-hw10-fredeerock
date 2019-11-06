var particles = [];

function setup() {
  createCanvas(800, 600);

  // for (var i = 0; i < 100; i++) {
  //   particles.push(new Particle);
  // }

}


function draw() {
  background(100);
  // print(millis() + " " + millis() % 100)
  // print(frameRate())

  if (frameCount % 60 == 0) {
    particles.push(new Particle);
  }

  for (var particle of particles) {
    particle.display();
  }

}


class Particle {
  constructor() {
    this.xPos = width / 2;
    this.yPos = height;
  }

  display() {
    circle(this.xPos, this.yPos, 10);
    this.yPos--;
  }

}
