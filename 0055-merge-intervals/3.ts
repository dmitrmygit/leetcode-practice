export {};

function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) {
        return [];
    }
    const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);
    const res = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
        const lastRes = res.length - 1;
        if (sorted[i][0] > res[lastRes][1]) {
            res.push(sorted[i]);
        } else if (sorted[i][1] > res[lastRes][1]) {
            res[lastRes] = [res[lastRes][0], sorted[i][1]];
        }
    }
    return res;
}
