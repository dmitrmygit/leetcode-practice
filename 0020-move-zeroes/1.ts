export {};

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    nums.sort((a, b) => {
        if ((a === 0) === (b === 0)) return 0;
        if (a === 0 && b !== 0) return 1;
        else return -1;
    });
}
