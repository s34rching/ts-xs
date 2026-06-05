export const getSummaryRanges = (nums: number[]): string[] => {
    const ranges: string[][] = [];
    let range: string[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            range.push(nums[i].toString());
        } else if (nums[i] + 1 !== nums[i + 1]) {
            range.push(nums[i].toString());
            ranges.push(range);
            range = []
        } else {
            ranges.push([nums[i].toString()])
        }
    }

    const summaryRanges = ranges.map((r) => {
        if (r.length > 1) {
            return `${r[0]}->${r[r.length - 1]}`;
        } else {
            return r[0]
        }
    });

    return summaryRanges;
};