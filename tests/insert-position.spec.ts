import {getInsertPosition} from "../src/insert-position/insert-position";

describe('"getInsertPosition"', ()=> {
    const numbers = [-2, 0, 1, 6, 18, 6541];

    it('returns insert position for unique positive number', () => {
        expect(getInsertPosition(numbers, 5)).toEqual(3);
    })

    it('returns insert position for non-unique positive number', () => {
        expect(getInsertPosition(numbers, 1)).toEqual(2);
    })

    it('returns insert position for zero', () => {
        expect(getInsertPosition(numbers, 0)).toEqual(1);
    })

    it('returns insert position if number exceeds the latest item', () => {
        expect(getInsertPosition(numbers, 9562)).toEqual(6);
    })
})