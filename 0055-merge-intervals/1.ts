export {};

function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) {
        return [];
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const res: number[][] = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > res[res.length - 1][1]) {
            res.push(intervals[i]);
        } else if (intervals[i][1] > res[res.length - 1][1]) {
            res[res.length - 1][1] = intervals[i][1];
        }
    }
    return res;
}
