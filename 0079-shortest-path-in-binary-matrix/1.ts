export {};

function shortestPathBinaryMatrix(grid: number[][]): number {
    if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1;
    if (grid.length === 1) return 1;
    const directions = [
        {i: -1, j: -1},
        {i: -1, j: 0},
        {i: -1, j: 1},
        {i: 0, j: -1},
        {i: 0, j: 1},
        {i: 1, j: -1},
        {i: 1, j: 0},
        {i: 1, j: 1}
    ];
    const visited = Array.from({length: grid.length}, () => Array.from<boolean | undefined>({length: grid.length}));
    let stack: { i: number, j: number }[] = [];
    stack.push({i: 0, j: 0});
    visited[0][0] = true;
    let step: number = 1;
    while (stack.length) {
        step++;
        const builder: { i: number, j: number }[] = [];
        for (const stackItem of stack) {
            for (const direction of directions) {
                const i = stackItem.i + direction.i;
                const j = stackItem.j + direction.j;
                if (i === grid.length - 1 && j === grid.length - 1) return step;
                if (i < 0 || j < 0 || i >= grid.length || j >= grid.length) continue;
                if (grid[i][j] === 1) continue;
                if (visited[i][j]) continue;
                visited[i][j] = true;
                builder.push({i, j});
            }
        }
        stack = builder;
    }
    return -1;
}
