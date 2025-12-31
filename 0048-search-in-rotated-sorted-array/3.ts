export {};

function search(nums: number[], target: number): number {
    if (nums[0] <= nums[nums.length - 1] && (target < nums[0] || target > nums[nums.length - 1])) {
        return -1;
    }
    const rotated = nums[0] <= target;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        if (rotated ? (nums[middle] > target || nums[0] > nums[middle]) : (nums[0] > nums[middle] && nums[middle] > target)) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}
