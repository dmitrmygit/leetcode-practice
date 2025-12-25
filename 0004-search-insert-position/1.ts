function searchInsert(nums: number[], target: number): number {
    return searchInsertPrivate(nums, target, 0, nums.length - 1);
}

function searchInsertPrivate(nums: number[], target: number, start: number, end: number): number {
    if (start >= end) {
        if (target > nums[start]) return start + 1;
        else return start;
    }

    const middle = Math.floor((start + end) / 2);
    if (target <= nums[middle]) return searchInsertPrivate(nums, target, start, middle);
    else return searchInsertPrivate(nums, target, middle + 1, end);
}
