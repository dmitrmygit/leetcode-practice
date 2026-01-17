export {};

function pacificAtlantic(heights: number[][]): number[][] {
    const n = heights?.[0]?.length;
    if (!n) return [];
    const m = heights.length;
    const visited = Array.from({length: m}, () => Array.from<boolean>({length: n}));
    const res: number[][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const currentRes = search(heights[i][j], i, j, m, n, heights, visited);
            if (currentRes.pacific && currentRes.atlantic) {
                res.push([i, j]);
            }
        }
    }
    return res;
}

function search(maxHeight: number, i: number, j: number, m: number, n: number, heights: number[][], visited: boolean[][]): {
    pacific: boolean,
    atlantic: boolean
} {
    if (i < 0 || j < 0) {
        return {pacific: true, atlantic: false};
    }
    if (i >= m || j >= n) {
        return {pacific: false, atlantic: true};
    }
    if (visited[i][j]) return {pacific: false, atlantic: false};
    const height = heights[i][j];
    if (height > maxHeight) {
        return {pacific: false, atlantic: false};
    }
    visited[i][j] = true;
    let pacific = false;
    let atlantic = false;
    const top = search(height, i, j - 1, m, n, heights, visited);
    pacific ||= top.pacific;
    atlantic ||= top.atlantic;
    if (pacific && atlantic) {
        visited[i][j] = false;
        return {pacific, atlantic};
    }
    const left = search(height, i - 1, j, m, n, heights, visited);
    pacific ||= left.pacific;
    atlantic ||= left.atlantic;
    if (pacific && atlantic) {
        visited[i][j] = false;
        return {pacific, atlantic};
    }
    const bottom = search(height, i, j + 1, m, n, heights, visited);
    pacific ||= bottom.pacific;
    atlantic ||= bottom.atlantic;
    if (pacific && atlantic) {
        visited[i][j] = false;
        return {pacific, atlantic};
    }
    const right = search(height, i + 1, j, m, n, heights, visited);
    pacific ||= right.pacific;
    atlantic ||= right.atlantic;
    if (pacific && atlantic) {
        visited[i][j] = false;
        return {pacific, atlantic};
    }
    visited[i][j] = false;
    return {pacific, atlantic};
}
