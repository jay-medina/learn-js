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

function groupIterator<T>(items: T[]): Iterator<T> {
    let currentIndex = 0;
    const { length } = items;

    return {
        next(): IteratorResult<T> {
            if (currentIndex === length) return { done: true, value: undefined! };

            const val = items[currentIndex];
            currentIndex = currentIndex + 1;

            return { value: val, done: false };
        },
    };
}

export class Group<T> implements Iterable<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    add(item: T) {
        if (!this.items.includes(item)) {
            this.items.push(item);
        }
    }

    remove(item: T) {
        this.items = this.items.filter(i => i !== item);
    }

    has(item: T): boolean {
        return this.items.includes(item);
    }

    get length() {
        return this.items.length;
    }

    [Symbol.iterator](): Iterator<T> {
        return groupIterator(this.items);
    }

    static from<X>(arr: X[]): Group<X> {
        const g = new Group<X>();
        arr.forEach(i => g.add(i));
        return g;
    }
}
