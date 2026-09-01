export {};

function coinChange(coins: number[], amount: number): number {
    const cache = new Array(amount + 1).fill(Infinity);
    cache[0] = 0;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            cache[i] = Math.min(cache[i], cache[i - coin] + 1);
        }
    }
    return cache[cache.length - 1] === Infinity ? -1 : cache[cache.length - 1];
}
