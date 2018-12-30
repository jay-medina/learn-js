export class Vec {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    plus(vec2: Vec) {
        return new Vec(this.x + vec2.x, this.y + vec2.y);
    }

    minus(vec2: Vec) {
        return new Vec(this.x - vec2.x, this.y - vec2.y);
    }

    get length() {
        const x2 = this.x * this.x;
        const y2 = this.y * this.y;
        return Math.sqrt(x2 + y2);
    }
}
