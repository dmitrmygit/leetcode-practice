export {};

function minCostToMoveChips(position: number[]): number {
    let even: number = 0;
    let odd: number = 0;
    for (const item of position) {
        if (item % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return Math.min(even, odd);
}
