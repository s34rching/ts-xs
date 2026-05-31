import { majorityElement } from "../src/majority-element/majority-element";

describe('"majorityElement"', () => {
    it('should return major element', () => {
        expect(majorityElement([1, 2, 2, 4, 5, 6])).toEqual(2)
    })

    it('should return major element on bigger array', () => {
        expect(majorityElement([1, 2, 2, 4, 4, 4, 5, 6])).toEqual(4)
    })
})
