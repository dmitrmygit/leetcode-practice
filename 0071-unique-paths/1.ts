export {};

function uniquePaths(m: number, n: number): number {
    const arr: number[][] = new Array(m).fill(null).map((v, i) => new Array(n).fill((m - 1) === i ? 1 : 0)
    );
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            arr[i][j] = (arr[i + 1][j] ?? 0) + (arr[i][j + 1] ?? 0);
        }
    }
    return arr[0][0];
}
