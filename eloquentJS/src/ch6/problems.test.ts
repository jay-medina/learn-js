import { Group, Vec } from './problems';

describe('Vec', () => {
    test('creates a vector with x and y', () => {
        const vec1 = new Vec(1, 2);
        expect(vec1.x).toBe(1);
        expect(vec1.y).toBe(2);
    });

    test('adds two vectors together', () => {
        const vec1 = new Vec(1, 2);
        const vec2 = new Vec(2, 3);
        expect(vec1.plus(vec2)).toEqual(new Vec(3, 5));
    });

    test('subtracts two vectors together', () => {
        const vec1 = new Vec(1, 2);
        const vec2 = new Vec(2, 3);
        expect(vec1.minus(vec2)).toEqual(new Vec(-1, -1));
    });

    test('gets the length of a vector', () => {
        expect(new Vec(3, 4).length).toBe(5);
    });
});

describe('Group', () => {
    let g: Group<number>;

    beforeEach(() => {
        g = new Group();
        g.add(4);
    });

    test('creates a group object', () => {
        expect(g).toBeInstanceOf(Group);
    });

    describe('add', () => {
        it('adds a value', () => {
            expect(g.length).toBe(1);
        });

        it('only adds the value once', () => {
            g.add(4);

            expect(g.length).toBe(1);
        });
    });

    describe('delete', () => {
        it('removes the item added', () => {
            g.remove(4);
            expect(g.length).toBe(0);
        });

        it('does nothing if the item wasnt a member', () => {
            g.remove(2);
            expect(g.length).toBe(1);
        });
    });

    describe('has', () => {
        it('checks if a value is a member of the group', () => {
            expect(g.has(4)).toBe(true);
        });

        it('also check when the value isnt there', () => {
            expect(g.has(11)).toBe(false);
        });
    });

    describe('from', () => {
        it('creates a group with the array properties', () => {
            const g1 = Group.from([1, 2, 3, 4, 5]);
            expect(g1.length).toBe(5);
        });

        it('removes dup properties', () => {
            const g1 = Group.from([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
            expect(g1.length).toBe(5);
        });
    });

    describe('iterable', () => {
        it('implements the iterable interface', () => {
            const g1 = Group.from(['a', 'b', 'c']);
            for (const v of g1) {
                expect(g1.has(v)).toBe(true);
            }
        });
    });
});
