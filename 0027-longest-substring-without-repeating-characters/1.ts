export {};

function lengthOfLongestSubstring(s: string): number {
    const charIndexMap = new Map<string, number>();
    let startIndex = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (charIndexMap.has(s[i])) {
            const index = charIndexMap.get(s[i])!;
            if (index >= startIndex) {
                startIndex = index + 1;
            }
        }
        charIndexMap.set(s[i], i);
        maxLength = Math.max(maxLength, i + 1 - startIndex);
    }
    return maxLength;
}
