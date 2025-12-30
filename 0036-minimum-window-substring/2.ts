export {};

function minWindow(s: string, t: string): string {
    const tCount = new Map<string, number>();
    for (const tItem of t) {
        tCount.set(tItem, (tCount.get(tItem) ?? 0) + 1);
    }
    const sIndexes = new Map<string, { arr: number[], head: number }>();
    const sIndexesArr: number[] = [];
    let res: { start: number, end: number } | null = null;
    let count: number = 0;
    for (let i = 0; i < s.length; i++) {
        const tCountVal = tCount.get(s[i]);
        if (tCountVal) {
            let sIndexesVal = sIndexes.get(s[i]) ?? {arr: [], head: 0};
            sIndexesVal.arr.push(i);
            sIndexesArr.push(i);
            if (sIndexesVal.arr.length - sIndexesVal.head <= tCountVal) {
                count++;
            } else {
                sIndexesArr.splice(sIndexesArr.indexOf(sIndexesVal.arr[sIndexesVal.head]), 1);
                sIndexesVal.head++;
            }
            sIndexes.set(s[i], sIndexesVal);
            if (count === t.length && (!res || (res.end - res.start > i + 1 - sIndexesArr[0]))) {
                res = {start: sIndexesArr[0], end: i + 1};
            }
        }
    }
    return !!res ? s.substring(res.start, res.end) : '';
}
