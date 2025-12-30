export {};

function threeSumClosest(nums: number[], target: number): number | null {
    nums.sort((a, b) => a - b);
    let closest: number | null = null;
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const val = nums[i] + nums[left] + nums[right];
            if (closest === null || Math.abs(target - val) < Math.abs(target - closest)) {
                closest = val;
            }
            if (val > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return closest;
}
