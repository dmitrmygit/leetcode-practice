export {};

function numIslands(grid: string[][]): number {
    const checked = new Set<number>();
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1' && !checked.has(i * 1000 + j)) {
                count++;
                const stack = [{i, j}];
                while (stack.length > 0) {
                    const cord = stack.pop()!;
                    checked.add(cord.i * 1000 + cord.j);
                    if (cord.i + 1 < grid.length && grid[cord.i + 1][cord.j] === '1' && !checked.has((cord.i + 1) * 1000 + cord.j)) {
                        stack.push({i: cord.i + 1, j: cord.j});
                    }
                    if (cord.i - 1 >= 0 && grid[cord.i - 1][cord.j] === '1' && !checked.has((cord.i - 1) * 1000 + cord.j)) {
                        stack.push({i: cord.i - 1, j: cord.j});
                    }
                    if (cord.j + 1 < grid[i].length && grid[cord.i][cord.j + 1] === '1' && !checked.has(cord.i * 1000 + cord.j + 1)) {
                        stack.push({i: cord.i, j: cord.j + 1});
                    }
                    if (cord.j - 1 >= 0 && grid[cord.i][cord.j - 1] === '1' && !checked.has(cord.i * 1000 + cord.j - 1)) {
                        stack.push({i: cord.i, j: cord.j - 1});
                    }
                }
            }
        }
    }
    return count;
}
