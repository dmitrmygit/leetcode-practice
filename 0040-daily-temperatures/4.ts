export {};

function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const res: number[] = new Array(temperatures.length).fill(0);
    let i = 0;
    while (i < temperatures.length) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const j = stack.pop()!;
            res[j] = i - j;
        }
        stack.push(i);
        i++;
    }
    return res;
}
