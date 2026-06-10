export const squareRoot = (x: number): number => {
    let guess = x / 2;

    while (guess * guess - x > 0.00001 || guess * guess - x < -0.00001) {
        guess = (guess + x / guess) / 2
    }

    return Math.floor(guess);
}
