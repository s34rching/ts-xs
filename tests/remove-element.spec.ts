import {removeElement} from "../src/remove-element/remove-element";

describe('"removeElement"', () => {
    it('should remove single element', () => {
        const nums = [1, 2, 3, 4, 5];
        const val = 3;

        expect(removeElement(nums, val)).toBe(4);
    })

    it('should remove all elements', () => {
        const nums = [1, 2, 3, 4, 5, 5, 5, 5];
        const val = 5;

        expect(removeElement(nums, val)).toBe(4);
    })

    it('should NOT remove elements if value is not in array', () => {
        const nums = [1, 2, 3, 4, 5];
        const val = 6;

        expect(removeElement(nums, val)).toBe(5);
    })

    it('should mutate initial array', () => {
        const nums = [1, 2, 3, 4, 5];
        const val = 1;

        removeElement(nums, val);
        expect(nums).toEqual([2, 3, 4, 5]);
    })
});