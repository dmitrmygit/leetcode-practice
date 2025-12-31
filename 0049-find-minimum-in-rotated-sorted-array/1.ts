export {};

function findMin(nums: number[]): number {
    if (nums.length === 1 || nums[0] <= nums[nums.length - 1]) {
        return nums[0];
    }
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        if (middle !== 0 && nums[middle - 1] > nums[middle]) {
            return nums[middle];
        }
        if (nums[0] > nums[middle]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}
