var particles = [];

function setup() {
  createCanvas(800, 600);

}

var direction = true;

function draw() {
  background(100);



  if (frameCount % 3 == 0) {

    particles.push(new Particle(direction));

  }

  for (var particle of particles) {
    particle.display();
  }

}


class Particle {
  constructor() {
    this.xPos = width / 2;
    this.yPos = height;
    this.amt = 1;
    this.direction = int(random(0, 2));
  }


  display() {
    circle(this.xPos, this.yPos, 10);
    this.yPos -= 20;
    this.xPos = this.xPos * this.amt;

    if (this.direction) {
      this.amt = this.amt / 1.002;
    }

    if (!this.direction) {
      this.amt = this.amt * 1.002;
    }
  }

}
