import { Vec } from './problems';

describe('Vec', () => {
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
        expect(new Vec(3,4).length).toBe(5);
    });
});
