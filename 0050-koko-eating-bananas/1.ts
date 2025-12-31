export {};

function minEatingSpeed(piles: number[], hours: number): number {
    let max = piles[0];
    for (const pile of piles) {
        max = Math.max(max, pile);
    }
    let left = 1;
    let hoursPerPile = Math.floor(hours / piles.length);
    let right = Math.ceil(max / hoursPerPile);
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        const beforeMiddle = middle - 1;
        let spentHours = 0;
        let spentHoursBeforeMiddle = 0;
        let moreBeforeMiddle = false;
        let more = false;
        for (const pile of piles) {
            spentHours += Math.ceil(pile / middle);
            spentHoursBeforeMiddle += Math.ceil(pile / beforeMiddle);
            if (spentHoursBeforeMiddle > hours) {
                moreBeforeMiddle = true;
            }
            if (spentHours > hours) {
                more = true;
                break;
            }

        }
        if (!more && moreBeforeMiddle) {
            return middle;
        }
        if (more) {
            left = middle + 1;
        } else if (right !== middle) {
            right = middle;
        } else {
            break;
        }
    }
    return -1;
}
