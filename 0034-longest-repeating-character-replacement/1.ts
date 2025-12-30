export {};

function characterReplacement(s: string, k: number): number {
    const countMap = new Map<string, number>();
    let maxCount = 0;
    let res = 0;
    for (let left = 0, right = 0; right < s.length; right++) {
        countMap.set(s[right], (countMap.get(s[right]) ?? 0) + 1);
        maxCount = Math.max(maxCount, countMap.get(s[right])!);

        while (right - left - maxCount + 1 > k) {
            countMap.set(s[left], countMap.get(s[left])! - 1);
            left++;
        }

        res = Math.max(res, right - left + 1);
    }
    return res;
}
