export {};

function insert(intervals: number[][], newInterval: number[]): number[][] {
    let tmp: number[] | null = newInterval;
    const res: number[][] = [];
    for (const interval of intervals) {
        if (tmp === null) {
            res.push(interval);
        } else if (interval[1] < tmp[0]) {
            res.push(interval);
        } else if (tmp[1] < interval[0]) {
            res.push(tmp);
            res.push(interval);
            tmp = null;
        } else if (interval[1] >= tmp[0]) {
            const start = Math.min(interval[0], tmp[0]);
            const end = Math.max(interval[1], tmp[1]);
            tmp = [start, end];
        }
    }
    if (tmp !== null) {
        res.push(tmp);
    }
    return res;
}
