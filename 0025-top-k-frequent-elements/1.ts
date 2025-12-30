export {};

function topKFrequent(nums: number[], k: number): number[] {
    const frequency = new Map<number, number>();
    for (const num of nums) {
        frequency.set(num, (frequency.get(num) ?? 0) + 1);
    }
    const res = new Set<number>();
    for (let i = 0; i < k; i++) {
        let entry: [number, number] | null = null;
        for (const [key, value] of frequency.entries()) {
            if (!res.has(key) && (entry === null || value > entry[1])) {
                entry = [key, value];
            }
        }
        if (entry !== null) {
            res.add(entry[0]);
        }
    }
    return Array.from(res);
}
