export {};

function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];
    const indexes: number[] = [];
    let head = 0;
    for (let i = 0; i < nums.length; i++) {
        while (head < indexes.length && indexes[head] < i - k + 1) {
            head++;
        }
        while (head < indexes.length && nums[indexes[indexes.length - 1]] < nums[i]) {
            indexes.pop();
        }
        indexes.push(i);
        if (i >= k - 1) {
            res.push(nums[indexes[head]]);
        }
    }
    return res;
}
