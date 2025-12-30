export {};

function topKFrequent(nums: number[], k: number): number[] {
    const frequency: { [num: number]: number } = {};
    for (const num of nums) {
        frequency[num] = (frequency[num] ?? 0) + 1;
    }
    return Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => +num);
}
