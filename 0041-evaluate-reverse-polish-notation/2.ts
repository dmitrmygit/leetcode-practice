export {};

function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    const operations = new Set(['+', '-', '*', '/']);
    for (const token of tokens) {
        if (operations.has(token)) {
            const right = stack.pop()!;
            const left = stack.pop()!;
            let res: number;
            if (token === '+') {
                res = left + right;
            } else if (token === '-') {
                res = left - right;
            } else if (token === '*') {
                res = left * right;
            } else {
                res = Math.trunc(left / right);
            }
            stack.push(res);
        } else {
            stack.push(+token);
        }
    }
    return stack.pop()!
}
