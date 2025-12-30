export {};

function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];
    const indexes: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        while (indexes.length > 0 && indexes[0] < i - k + 1) {
            indexes.shift();
        }
        while (indexes.length > 0 && nums[indexes[indexes.length - 1]] < nums[i]) {
            indexes.pop();
        }
        indexes.push(i);
        if (i >= k - 1) {
            res.push(nums[indexes[0]]);
        }
    }
    return res;
}
