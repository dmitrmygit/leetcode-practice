export {};

function getSneakyNumbers(nums: number[]): number[] {
    const res1 = new Set<number>();
    const res2: number[] = [];
    for (const num of nums) {
        if (res1.has(num)) {
            res2.push(num);
            if (res2.length === 2) break;
        } else {
            res1.add(num);
        }
    }
    return res2;
}
