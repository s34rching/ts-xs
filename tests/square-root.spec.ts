import { squareRoot } from "../src/square-root/square-root";

describe('"squareRoot"', () => {
    it("should return square root rounded to floor number", () => {
        expect(squareRoot(8)).toEqual(2);
    });

    it("should return square root", () => {
        expect(squareRoot(9)).toEqual(3);
    })
})
