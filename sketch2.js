var particles = [];

function setup() {
  createCanvas(800, 600);

}

var direction = true;

function draw() {
  background(100);

  // translate(width / 2, height / 2);
  // scale(0.5);

  if (frameCount % 10 == 0) {

    particles.push(new Particle());

  }

  for (var particle of particles) {
    particle.display();
  }

}


class Particle {
  constructor() {
    this.xPos = 0;
    this.yPos = height;
    this.amt = 1;
    this.amt = random(0, 0.5);
    this.rr = random(255);
    this.rg = random(255);
    this.rb = random(255)
  }


  display() {
    stroke(this.rr, this.rg, this.rb);
    // push();
    // translate(width / 2, 0);
    print(this.xPos);
    circle(this.xPos, this.yPos, 10);

    // pop();
    this.yPos -= 1;
    this.xPos = sqrt(this.yPos / this.amt) + width / 2;



    // this.xPos = this.xPos * this.amt;

    // if (this.direction) {
    //   this.amt = this.amt / 1.002;
    // }

    // if (!this.direction) {
    //   this.amt = this.amt * 1.002;
    // }
  }

}
