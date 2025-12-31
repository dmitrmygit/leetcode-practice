export {};

function insert(intervals: number[][], newInterval: number[]): number[][] {
    let tmp: number[] | null = newInterval;
    const res: number[][] = [];
    for (let i = 0; i < intervals.length; i++) {
        if (tmp === null) {
            res.push(intervals[i]);
        } else if (intervals[i][1] < tmp[0]) {
            res.push(intervals[i]);
        } else if (tmp[1] < intervals[i][0]) {
            res.push(tmp);
            res.push(intervals[i]);
            tmp = null;
        } else if (intervals[i][1] >= tmp[0]) {
            const start = Math.min(intervals[i][0], tmp[0]);
            const end = Math.max(intervals[i][1], tmp[1]);
            tmp = [start, end];
        }
    }
    if (tmp !== null) {
        res.push(tmp);
    }
    return res;
}
