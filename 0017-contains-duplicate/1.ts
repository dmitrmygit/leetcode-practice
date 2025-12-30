export {};

function containsDuplicate(nums: number[]): boolean {
    const previous = new Set<number>();
    for (const num of nums) {
        if (previous.has(num)) return true;
        previous.add(num);
    }
    return false;
}
