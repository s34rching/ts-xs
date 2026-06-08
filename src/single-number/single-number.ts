export function getSingleNumber(nums: number[]): number | undefined {
    for (const num of nums) {
        const first = nums.indexOf(num);

        if (first !== nums.length - 1) {
            const last = nums.indexOf(num, first + 1);

            if (last === -1) {
                return num
            }
        } else {
            return num
        }
    }
};
