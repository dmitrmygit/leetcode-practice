export {};

function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const days = new Map<number, number>();
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const j = stack.pop()!;
            days.set(j, i - j);
        }
        stack.push(i);
    }
    const res: number[] = [];
    for (let i = 0; i < temperatures.length; i++) {
        res.push(days.get(i) ?? 0);
    }
    return res;
}
