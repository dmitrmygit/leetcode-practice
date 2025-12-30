export {};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number | null {
    const medianIndex = (nums1.length + nums2.length - 1) / 2;
    const leftMedianIndex = Math.floor(medianIndex);
    const rightMedianIndex = Math.ceil(medianIndex);
    let i = 0;
    let j = 0;
    let previousItem: number | null = null;
    while (true) {
        let item: number | null = null;
        const hasItem1 = i < nums1.length;
        const hasItem2 = j < nums2.length;
        if (hasItem1 && hasItem2) {
            if (nums1[i] < nums2[j]) {
                item = nums1[i];
                i++;
            } else {
                item = nums2[j];
                j++;
            }
        } else if (hasItem1) {
            item = nums1[i];
            i++;
        } else if (hasItem2) {
            item = nums2[j];
            j++;
        } else {
            return null;
        }
        if (i + j - 1 === rightMedianIndex) {
            if (leftMedianIndex === rightMedianIndex || previousItem === null) {
                return item;
            } else {
                return (previousItem + item) / 2;
            }
        }
        previousItem = item;
    }
}
