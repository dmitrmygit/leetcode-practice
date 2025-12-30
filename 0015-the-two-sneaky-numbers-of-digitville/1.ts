export {};

function getSneakyNumbers(nums: number[]): number[] {
    const res1 = new Set<number>();
    const res2 = new Set<number>();
    for (const num of nums) {
        if (res1.has(num)) {
            res2.add(num);
            if (res2.size === 2) break;
        } else {
            res1.add(num);
        }
    }
    return Array.from(res2);
}
