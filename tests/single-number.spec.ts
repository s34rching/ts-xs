import { getSingleNumber } from "../src/single-number/single-number";

describe('"getSingleNumber"', () => {
    it('should return a single number', () => {
        expect(getSingleNumber([5, 1, 5, 100, 110, 100, 110])).toBe(1);
    })

    it('should return "undefined" if there is NOT a single number', () => {
        expect(getSingleNumber([5, 5, 100, 110, 100, 110])).toBeUndefined();
    })
})
