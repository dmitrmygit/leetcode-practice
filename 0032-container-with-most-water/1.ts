export {};

function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const value = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(max, value);
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return max;
}
