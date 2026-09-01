export {};

function rob(nums: number[]): number {
    const cache = Array.from<number>({length: nums.length});
    return Math.max(
        search(nums, 0, cache),
        search(nums, 1, cache)
    );
}

function search(nums: number[], index: number, cache: number[]): number {
    if (index >= nums.length) return 0;
    if (cache[index] !== undefined) return cache[index];
    const res = nums[index] + Math.max(
        search(nums, index + 2, cache),
        search(nums, index + 3, cache)
    );
    cache[index] = res;
    return res;
}
