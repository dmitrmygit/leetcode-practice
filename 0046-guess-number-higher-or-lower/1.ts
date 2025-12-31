export {};

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return         -1 if num is higher than the picked number
 *                  1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// mock
const guess = (num: number) => 0;

function guessNumber(n: number): number {
    let left = 1;
    let right = 2 ** 31 - 1;
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        const compared = guess(middle);
        if (compared === 0) {
            return middle;
        }
        if (compared === -1) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}
