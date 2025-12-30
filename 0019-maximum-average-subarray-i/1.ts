export {};

function findMaxAverage(nums: number[], k: number): number | null {
    let sum: number = 0;
    let max: number | null = null;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i - k >= 0) {
            sum -= nums[i - k];
        }
        if ((i - k + 1 >= 0) && (max === null || sum > max)) {
            max = sum;
        }
    }
    return max === null ? null : max / k;
}
