class Vec {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.speed = createVector();
    }

    show(angle, mag) {
        this.speed = p5.Vector.fromAngle(angle, mag);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.speed.heading());
        // stroke(0, 75);
        // stroke(0);
        // line(0, 0, this.speed.x, this.speed.y);
        // stroke(0);
        pop();
    }
}
