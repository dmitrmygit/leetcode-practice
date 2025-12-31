export {};

function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) {
        return [];
    }
    const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);
    const res: number[][] = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i][0] > res[res.length - 1][1]) {
            res.push(sorted[i]);
        } else if (sorted[i][1] > res[res.length - 1][1]) {
            res[res.length - 1] = [res[res.length - 1][0], sorted[i][1]];
        }
    }
    return res;
}
