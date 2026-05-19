import { getLongestPrefix, isAllHavePrefix } from "../src/longest-common-prefix/longest-common-prefix";

describe('"getLongestPrefix"', () => {
    describe('"isAllHavePrefix"', () => {
        it('should return "true" if prefix the same', () => {
            const words = ['cat', 'catty', 'cat'];
            const result = isAllHavePrefix(words, 'ca');

            expect(result).toBe(true);
        })

        it('should return "false" if prefix different', () => {
            const words = ['cat', 'catty', 'dat'];
            const result = isAllHavePrefix(words, 'ca');

            expect(result).toBe(false);
        })
    });

    it('should return the longest prefix', () => {
        const words = ['cat', 'catty', 'cat'];
        const result = getLongestPrefix(words);

        expect(result).toBe('cat');
    })

    it('should return empty string if there is not common prefix', () => {
        const words = ['jat', 'catty', 'cat'];
        const result = getLongestPrefix(words);

        expect(result).toBe('');
    })
})
