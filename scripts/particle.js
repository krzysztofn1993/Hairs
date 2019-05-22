class Particle {
    constructor() {
        this.pos = createVector(random(width), random(width));
        this.vel = createVector();
        this.acc = createVector();
        this.old = this.pos.copy();
    }

    show() {
        strokeWeight(1);
        stroke(0, 4);
        // stroke(0);
        strokeCap(SQUARE);
        line(this.pos.x, this.pos.y, this.old.x, this.old.y);
        // point(this.pos.x, this.pos.y);
        this.old = this.pos.copy();
    }

    update(force) {
        // force.limit();
        this.acc.add(force);
        this.acc.limit(5);
        this.vel.add(this.acc);
        this.vel.limit(8);
        this.pos.add(this.vel);
        // console.log(this.acc);

        this.acc.set(0);
    }

    updatePrev() {
        this.old = this.pos.copy();
    }

    boundaries() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width - 1;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}
