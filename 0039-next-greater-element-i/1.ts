export {};

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const greaters = new Map<number, number>();
    for (let i = 0; i < nums2.length - 1; i++) {
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[i] < nums2[j]) {
                greaters.set(nums2[i], nums2[j]);
                break;
            }
        }
    }
    const res: number[] = [];
    for (const num1 of nums1) {
        res.push(greaters.get(num1) ?? -1);
    }
    return res;
}
