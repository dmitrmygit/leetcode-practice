export {};

function orangesRotting(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let fresh = 0;
    let queue: { i: number, j: number }[] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const cell = grid[i][j];
            if (cell === 1) fresh++;
            else if (cell === 2) queue.push({i, j});
        }
    }
    if (fresh === 0) return 0;

    const increment = [
        {i: 1, j: 0},
        {i: -1, j: 0},
        {i: 0, j: 1},
        {i: 0, j: -1}
    ];

    let step = -1;

    while (queue.length) {
        step++;
        const newQueue: { i: number, j: number }[] = [];
        for (const item of queue) {
            for (const inc of increment) {
                const i = item.i + inc.i;
                const j = item.j + inc.j;
                if (grid[i]?.[j] === 1) {
                    fresh--;
                    grid[i][j] = 2;
                    newQueue.push({i, j});
                }
            }
        }
        queue = newQueue;
    }
    return fresh === 0 ? step : -1;
}
