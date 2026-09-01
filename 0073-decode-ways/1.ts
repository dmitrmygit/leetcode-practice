export {};

function numDecodings(s: string): number {
    const cache = new Array(s.length + 1).fill(0);
    cache[s.length] = 1;
    for (let i = s.length - 1; i >= 0; i--) {
        const current = +s[i];
        if (current === 0) {
            cache[i] = 0;
            continue;
        }
        const next = +s[i + 1];
        const twoValid = current === 1 || (current === 2 && next < 7);
        cache[i] += cache[i + 1];
        if (twoValid) cache[i] += cache[i + 2] ?? 0;
    }
    return cache[0];
}
