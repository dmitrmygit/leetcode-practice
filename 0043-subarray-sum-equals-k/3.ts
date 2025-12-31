export {};

function subarraySum(nums: number[], k: number): number {
    let sum = 0;
    const sumBefore = new Map<number, number>();
    sumBefore.set(0, 1);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sumBefore.has(sum - k)) {
            count += sumBefore.get(sum - k)!;
        }
        sumBefore.set(sum, (sumBefore.get(sum) ?? 0) + 1);
    }
    return count;
}
