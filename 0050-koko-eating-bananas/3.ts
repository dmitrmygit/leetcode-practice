export {};

function minEatingSpeed(piles: number[], hours: number): number {
    let min = piles[0];
    let max = piles[0];
    for (const pile of piles) {
        min = Math.min(min, pile);
        max = Math.max(max, pile);
    }
    let hoursPerPile = Math.floor(hours / piles.length);
    let left = Math.floor(min / hoursPerPile);
    let right = Math.ceil(max / hoursPerPile);
    let minAmount = -1;
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        let spentHours = 0;
        let more = false;
        for (const pile of piles) {
            spentHours += Math.ceil(pile / middle);
            if (spentHours > hours) {
                more = true;
                break;
            }

        }
        if (!more && (minAmount === -1 || middle < minAmount)) {
            minAmount = middle;
        }
        if (more) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return minAmount;
}
