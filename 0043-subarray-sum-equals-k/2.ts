export {};

function subarraySum(nums: number[], k: number): number {
    let sum = 0;
    const sumMap = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const arr = sumMap.get(sum) ?? [];
        arr.push(i);
        sumMap.set(sum, arr);
    }
    let count = 0;
    sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === k) {
            count++;
        }
        sum += nums[i];
        const arr = sumMap.get(k - nums[i] + sum);
        if (!arr) {
            continue;
        }
        for (const j of arr) {
            if (j > i) {
                count++;
            }
        }
    }
    return count;
}
