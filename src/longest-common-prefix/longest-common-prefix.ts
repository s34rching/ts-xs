export const isAllHavePrefix = (testWords: string[], prefix: string): boolean => {
    const isHasPrefix = testWords.map((word) => word.startsWith(prefix));
    return isHasPrefix.every((item) => item);
}

export const getLongestPrefix = (testWords: string[]): string => {
    const targetWord = testWords[0];

    let longestPrefix = '';

    for (let i = 1; i <= targetWord.length; i++) {
        const prefix = targetWord.slice(0, i);

        if (isAllHavePrefix(testWords, prefix)) {
            longestPrefix = prefix;
        } else {
            break;
        }
    }

    return longestPrefix;
}
