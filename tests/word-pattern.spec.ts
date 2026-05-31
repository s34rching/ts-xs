import { wordPattern } from "../src/word-pattern/word-pattern";

describe('"wordPattern"', () => {
    it("should evaluate to 'true' mirror pattern", () => {
        const pattern = 'abba';
        const target = 'ft bn bn ft';

        expect(wordPattern(pattern, target)).toBeTruthy();
    });

    it("should evaluate to 'true' single word pattern", () => {
        const pattern = 'a';
        const target = 'ft';

        expect(wordPattern(pattern, target)).toBeTruthy();
    });

    it("should evaluate to 'true' distinct unique words pattern", () => {
        const pattern = 'abc';
        const target = 'ft dd gh';

        expect(wordPattern(pattern, target)).toBeTruthy();
    });

    it("should evaluate to 'false' not patternized string", () => {
        const pattern = 'abca';
        const target = 'ft dd gh vv';

        expect(wordPattern(pattern, target)).toBeFalsy();
    });

    it("should evaluate to 'false' not provided pattern", () => {
        const pattern = '';
        const target = 'ft dd gh vv';

        expect(wordPattern(pattern, target)).toBeFalsy();
    });

    it("should evaluate to 'false' not provided target", () => {
        const pattern = 'abca';
        const target = '';

        expect(wordPattern(pattern, target)).toBeFalsy();
    });
});
