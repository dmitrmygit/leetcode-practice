export {};

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const shifts = Array.from<number>({length: nums.length});
    let count: number = 0;
    for (let i = 0; i < nums.length; i++) {
        shifts[i] = count;
        if (nums[i] === 0) count++;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i - shifts[i]] = nums[i];
        if (i >= nums.length - count) {
            nums[i] = 0;
        }
    }
}
