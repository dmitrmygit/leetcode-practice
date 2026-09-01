export {};

function networkDelayTime(times: number[][], n: number, k: number): number {
    const directions = new Array<{ source: number, target: number, time: number }[] | undefined>(n);
    for (const time of times) {
        const item = directions[time[0] - 1] ?? [];
        item.push({source: time[0], target: time[1], time: time[2]});
        directions[time[0] - 1] = item;
    }

    const minTimes = new Array<number | undefined>(n);
    minTimes[k - 1] = 0;
    const direction = directions[k - 1];
    if (!direction) return -1;
    let stack = direction;
    while (stack.length) {
        const builder: { source: number, target: number, time: number }[] = [];
        for (const stackItem of stack) {
            if (minTimes[stackItem.target - 1] === undefined || minTimes[stackItem.source - 1]! + stackItem.time < minTimes[stackItem.target - 1]!) {
                minTimes[stackItem.target - 1] = minTimes[stackItem.source - 1]! + stackItem.time;
                const targetDirections = directions[stackItem.target - 1];
                if (targetDirections) {
                    for (const targetDirection of targetDirections) {
                        builder.push(targetDirection);
                    }
                }
            }
        }
        stack = builder;
    }
    return minTimes.includes(undefined)
        ? -1
        : (minTimes as number[]).reduce((acc, cur) => acc < cur ? cur : acc, 0);
}
