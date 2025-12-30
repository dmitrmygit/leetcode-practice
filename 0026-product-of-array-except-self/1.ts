export {};

function productExceptSelf(nums: number[]): number[] {
    const res: number[] = [];
    let multipleWithoutZero: number = 1;
    let zeroCount: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            multipleWithoutZero *= nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (zeroCount > 1) {
                res.push(0);
            } else {
                res.push(multipleWithoutZero);
            }
        } else {
            if (zeroCount > 0) {
                res.push(0);
            } else {
                res.push(multipleWithoutZero / nums[i]);
            }
        }
    }
    return res;
}
