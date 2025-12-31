export {};

function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const j = stack.pop()!;
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, width * heights[j]);
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop()!;
        const width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
        max = Math.max(max, width * heights[j]);
    }
    return max;
}
