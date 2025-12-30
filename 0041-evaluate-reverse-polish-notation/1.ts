export {};

const operations = new Set(['+', '-', '*', '/']);

function evalRPN(tokens: string[]): number {
    return evalRPNPrivate(tokens, 0, tokens.length - 1);
};

function evalRPNPrivate(tokens: string[], start: number, end: number): number {
    if (start === end) {
        return +tokens[start];
    }
    let middleEnd: number = 0;
    for (let i = end - 1, level = 0; i >= start; i--) {
        const isPreviousOperation = operations.has(tokens[i + 1]);
        const isCurrentOperation = operations.has(tokens[i]);
        if (isCurrentOperation && isPreviousOperation) {
            level++;
        } else if (!isCurrentOperation && !isPreviousOperation) {
            level--;
        }
        if (level === 0) {
            middleEnd = i;
            break;
        }
    }
    const left = evalRPNPrivate(tokens, start, middleEnd - 1);
    const right = evalRPNPrivate(tokens, middleEnd, end - 1);
    const operation = tokens[end];
    if (operation === '+') {
        return left + right;
    }
    if (operation === '-') {
        return left - right;
    }
    if (operation === '*') {
        return left * right;
    }
    return Math.trunc(left / right);
}
