export {};

function getSneakyNumbers(nums: number[]): number[] {
    const unique = new Set<number>();
    const res: number[] = [];
    for (const num of nums) {
        if (unique.has(num)) {
            res.push(num);
            if (res.length === 2) break;
        } else {
            unique.add(num);
        }
    }
    return res;
}
