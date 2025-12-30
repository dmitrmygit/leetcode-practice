export {};

function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];
    const valuesCount = new Map<number, number>();
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        valuesCount.set(nums[i], (valuesCount.get(nums[i]) ?? 0) + 1);
        if (i >= k) {
            valuesCount.set(nums[i - k], (valuesCount.get(nums[i - k]) ?? 0) - 1);
        }
        if (!!valuesCount.get(max)) {
            max = Math.max(max, nums[i]);
        } else {
            max = nums[i];
            for (let j = i - k + 1; j < i; j++) {
                max = Math.max(max, nums[j]);
            }
        }
        if (i >= k - 1) {
            res.push(max);
        }
    }
    return res;
}
