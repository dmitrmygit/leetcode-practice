export {};

function lengthOfLIS(nums: number[]): number {
    const cache = new Array(nums.length);
    let max = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                count = Math.max(count, cache[j] + 1);
            }
        }
        cache[i] = count;
        max = Math.max(count, max);
    }
    return max + 1;
}
