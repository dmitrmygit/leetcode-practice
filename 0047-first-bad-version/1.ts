export {};

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * }
 */

const solution = function (isBadVersion: (i: number) => boolean) {
    return function (n: number): number {
        let left = 1;
        let right = n;
        while (left <= right) {
            const middle = left + Math.floor((right - left) / 2);
            const isBad = isBadVersion(middle);
            if (right - left <= 1) {
                return isBad ? middle : middle + 1;
            }
            if (isBad) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }
        return -1;
    };
}
