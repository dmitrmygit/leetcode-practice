export {};

function minCostClimbingStairs(cost: number[]): number {
    const cache = Array.from<number>({length: cost.length});
    return Math.min(
        search(cost, 0, cache),
        search(cost, 1, cache)
    )
}

function search(cost: number[], index: number, cache: number[]): number {
    if (index >= cost.length) return 0;
    if (cache[index] !== undefined) return cache[index];
    const res = cost[index] + Math.min(
        search(cost, index + 1, cache),
        search(cost, index + 2, cache)
    );
    cache[index] = res;
    return res;
}
