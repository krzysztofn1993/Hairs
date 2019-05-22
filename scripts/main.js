const width = 800;
const height = 800;
const inX = 100;
const inY = 100;
let resX;
let resY;
let xoff = 0;
let yoff = 0;
let offset = 0;
let vectors = [];
let particles = [];
const noOfParticles = 3600;
let x, y, indexX, indexY, vectorIndex;
function setup() {
    createCanvas(width, height);
    resX = floor(width / inX);
    resY = floor(height / inY);
    for (let index = 0; index < noOfParticles; index++) {
        particles.push(new Particle());
    }
    particle = new Particle();
    for (let i = 0; i < inY; i++) {
        for (let j = 0; j < inX; j++) {
            vectors.push(new Vec(j * resX + 0.5 * resX, i * resY + 0.5 * resY, offset));
        }
    }
}

function draw() {
    xoff = 0;
    yoff = 0;
    if (frameCount % 50 == 0) {
        background('rgba(255,255,255, 0.02)');
        console.log(frameRate());
        for (let index = 0; index < vectors.length; index++) {
            angle = noise(xoff, yoff, offset) * TWO_PI;
            vectors[index].show(angle, resX / 2);
            if (vectors.length % resX) {
                yoff += 0.1;
            }
            xoff += 0.1;
        }
    }
    // background(255);

    for (let index = 0; index < noOfParticles; index++) {
        x = particles[index].pos.x;
        y = particles[index].pos.y;
        indexX = floor(x / resX);
        indexY = floor(y / resY);
        vectorIndex = indexX * inX + (indexY % inY);
        particles[index].update(vectors[vectorIndex].speed);
        particles[index].boundaries();
        particles[index].show();
    }
    // frameRate(1);
    offset += 0.05;
}
