export const wordPattern = (pattern: string, s: string): boolean => {
    const uniquePatternSymbols: string[] = [];
    const uniqueStringWords: string[] = [];
    const mappedPatternSymbols: Record<string, string> = {};

    if (!pattern.length || !s.length) {
        return false;
    }

    const patternSymbols = pattern.split('');
    patternSymbols.forEach((symbol) => {
        if (uniquePatternSymbols.indexOf(symbol) === -1) {
            uniquePatternSymbols.push(symbol);
        }
    })

    const stringWords = s.split(' ');
    stringWords.forEach((word) => {
        if (uniqueStringWords.indexOf(word) === -1) {
            uniqueStringWords.push(word);
        }
    })

    if (uniquePatternSymbols.length !== uniqueStringWords.length) {
        return false;
    }

    for (let i = 0; i < uniquePatternSymbols.length; i++) {
        mappedPatternSymbols[uniquePatternSymbols[i]] = uniqueStringWords[i];
    }

    const evaluatedPatternSymbols = patternSymbols.map((symbol) => mappedPatternSymbols[symbol]);

    return s === evaluatedPatternSymbols.join(' ');
}
