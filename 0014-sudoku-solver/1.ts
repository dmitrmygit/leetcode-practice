export {};

/**
 Do not return anything, modify board in-place instead.
 */
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function solveSudoku(board: string[][]): void {
    const cols = Array.from({length: 9}, () => new Set<string>());
    const rows = Array.from({length: 9}, () => new Set<string>());
    const squares = Array.from({length: 3}, () => Array.from({length: 3}, () => new Set<string>()));

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') continue;
            rows[r].add(board[r][c]);
            cols[c].add(board[r][c]);
            const squareR = squareIndex(r);
            const squareC = squareIndex(c);
            squares[squareR][squareC].add(board[r][c]);
        }
    }
    const boardCopy = board.map(b => b.slice());
    const solvedBoard = solveSudokuPrivate(boardCopy, cols, rows, squares);
    if (solvedBoard === null) return;
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            board[r][c] = solvedBoard[r][c];
        }
    }
}

function solveSudokuPrivate(board: string[][], cols: Set<string>[], rows: Set<string>[], squares: Set<string>[][]): string[][] | null {
    while (true) {
        let hasChanges = false;
        let hasDots = false;
        let minMerge: { r: number, c: number, value: string }[] = [];
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] !== '.') continue;
                hasDots = true;
                const merge: { r: number, c: number, value: string }[] = [];
                const squareR = squareIndex(r);
                const squareC = squareIndex(c);
                for (const value of values) {
                    if (!cols[c].has(value) && !rows[r].has(value) && !squares[squareR][squareC].has(value)) {
                        merge.push({r, c, value});
                    }
                }
                if (merge.length === 1) {
                    cols[c].add(merge[0].value);
                    rows[r].add(merge[0].value);
                    squares[squareR][squareC].add(merge[0].value);
                    board[r][c] = merge[0].value;
                    hasChanges = true;
                } else if (merge.length > 0 && (minMerge.length === 0 || minMerge.length > merge.length)) {
                    minMerge = merge;
                }
            }
        }
        if (!hasChanges) {
            if (!hasDots) {
                return board;
            } else if (minMerge.length === 0) {
                return null;
            } else {
                for (const m of minMerge) {
                    const boardCopy = board.map(b => b.slice());
                    boardCopy[m.r][m.c] = m.value;
                    const colsCopy = cols.map(c => new Set<string>(c));
                    colsCopy[m.c].add(m.value);
                    const rowsCopy = rows.map(r => new Set<string>(r));
                    rowsCopy[m.r].add(m.value);
                    const squaresCopy = squares.map(r => r.map(c => new Set<string>(c)));
                    const squareR = squareIndex(m.r);
                    const squareC = squareIndex(m.c);
                    squaresCopy[squareR][squareC].add(m.value);
                    const solvedBoard = solveSudokuPrivate(boardCopy, colsCopy, rowsCopy, squaresCopy);
                    if (solvedBoard !== null) return solvedBoard;
                }
                return null;
            }
        }
    }
}

function squareIndex(i: number): number {
    return Math.floor(i / 3);
}
