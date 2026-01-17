export {};

function eraseOverlapIntervals(intervals: number[][]): number {
    const sorted = intervals.slice().sort((a, b) => a[1] - b[1]);
    let currentEnd = -Infinity;
    let count = 0;
    for (const interval of sorted) {
        if (interval[0] >= currentEnd) {
            currentEnd = interval[1];
        } else {
            count++;
        }
    }
    return count;
}
