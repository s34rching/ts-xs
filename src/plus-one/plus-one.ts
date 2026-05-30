export const plusOne = (numbers: number[]): number[] => {
    const copiedNumbers: number[] = Object.assign([], numbers);

    if (copiedNumbers[copiedNumbers.length - 1] !== 9) {
        copiedNumbers[copiedNumbers.length - 1] += 1;
    } else {
        if (copiedNumbers.every((item) => item === 9)) {
            return [1, ...Array(copiedNumbers.length).fill(0)];
        }

        for (let i = copiedNumbers.length - 1; i > -10; i--) {
            if (copiedNumbers[i - 1] !== 9) {
                copiedNumbers[i - 1] += 1;
                copiedNumbers[i] = 0;
                break;
            } else {
                copiedNumbers[i] = 0;
            }
        }
    }

    return copiedNumbers;
}



