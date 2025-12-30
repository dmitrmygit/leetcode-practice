export {};

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const queue: number[] = [];
    for (let i = 0, j = 0; i < nums1.length; i++) {
        const fromNums1 = i < m ? nums1[i] : null;
        const fromNums2 = j < n ? nums2[j] : null;
        const fromQueue = queue.length > 0 ? queue[0] : null;
        const min = Math.min(...[fromQueue, fromNums1, fromNums2].filter(v => v !== null));
        if (min === fromNums1) continue;
        if (fromNums1 !== null) queue.push(fromNums1);
        if (min === fromNums2) {
            nums1[i] = fromNums2;
            j++;
        } else {
            nums1[i] = queue[0];
            queue.splice(0, 1);
        }
    }
}
