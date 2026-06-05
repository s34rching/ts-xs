import { getSummaryRanges } from "../src/summary-ranges/summary-ranges";

describe('"getSummaryRanges"', () => {
    it('should return summary ranges if there are only ranged spans', () => {
        expect(getSummaryRanges([1, 2, 4, 5, 6, 7, 10, 11, 12, 13, 14])).toEqual(["1->2", "4->7", "10->14"]);
    })

    it('should return summary ranges if there are only separate digits', () => {
        expect(getSummaryRanges([1, 4, 6, 10, 12, 14])).toEqual(["1", "4", "6", "10", "12", "14"]);
    })

    it('should return summary ranges if there are mixed values', () => {
        expect(getSummaryRanges([1, 4, 5, 6, 10, 12, 13, 14])).toEqual(["1", "4->6", "10", "12->14"]);
    })
})
