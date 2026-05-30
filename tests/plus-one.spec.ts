import { plusOne } from "../src/plus-one/plus-one";

describe('"plusOne"', () => {

    it('add one to the latest number in "numbers"', async () => {
        const numbers = [1, 2, 3, 4, 5];

        expect(plusOne(numbers)).toEqual([1, 2, 3, 4, 6]);
    });

    it('add one to the latest and previous numbers in "numbers" if latest is equal to 9', async () => {
        const numbers = [1, 2, 3, 4, 9];

        expect(plusOne(numbers)).toEqual([1, 2, 3, 5, 0]);
    });

    it('add one the the first member of "numbers" if all other items are "9"', async () => {
        const numbers = [8, 9, 9, 9];

        expect(plusOne(numbers)).toEqual([9, 0, 0, 0]);
    });

    it('change "numbers" array if has the "9" member', async () => {
        const numbers = [9];

        expect(plusOne(numbers)).toEqual([1, 0]);
    });

    it('change "numbers" array if its members only "9"', async () => {
        const numbers = [9, 9, 9, 9];

        expect(plusOne(numbers)).toEqual([1, 0, 0, 0, 0]);
    });
});
