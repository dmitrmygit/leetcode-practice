export {};

function twoSum(nums: number[], target: number): number[] {
    const previousNums = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const previousNum = target - nums[i];
        if (previousNums.has(previousNum)) {
            return [previousNums.get(previousNum)!, i];
        }
        previousNums.set(nums[i], i);
    }
    return [];
}
