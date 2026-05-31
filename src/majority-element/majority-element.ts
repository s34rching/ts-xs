export const majorityElement = (nums: number[]): number => {
    const elements: Record<string, number> = {}

    nums.forEach((num) => {
        if (elements.hasOwnProperty(`${num}`)) {
            elements[`${num}`] += 1
        } else {
            elements[`${num}`] = 1
        }
    })

    const occurrences: number[] = Object.values(elements);
    const maxOccurrences = Math.max(...occurrences);
    let majorElement: number;

    for (const key in elements) {
        if (elements[key] === maxOccurrences) {
            majorElement = Number.parseInt(key, 10);
        }
    }

    return majorElement!;
}
