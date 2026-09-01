export {};

function canPartition(nums: number[]): boolean {
    const halfSum = nums.reduce((a, b) => a + b, 0) / 2;
    if (!Number.isInteger(halfSum)) return false;
    const arr = new Array(halfSum + 1).fill(false);
    arr[0] = true;
    for (const num of nums) {
        for (let i = halfSum; i >= num; i--) {
            arr[i] = arr[i] || arr[i - num];
            if (arr[halfSum]) {
                return true;
            }
        }
    }
    return arr[halfSum];
}
