export const removeElement = (nums: number[], val: number): number => {
    while (nums.indexOf(val) !== -1) {
        const targetIndex = nums.indexOf(val);
        nums.splice(targetIndex, 1);
    }

    return nums.length;
}
