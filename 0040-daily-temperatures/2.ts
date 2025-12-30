export {};

function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const res: number[] = Array.from({length: temperatures.length}, () => 0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const j = stack.pop()!;
            res[j] = i - j;
        }
        stack.push(i);
    }
    return res;
}
