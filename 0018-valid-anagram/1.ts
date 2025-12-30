export {};

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const charsCount = new Map<string, number>();
    for (const sChar of s) {
        charsCount.set(sChar, (charsCount.get(sChar) ?? 0) + 1);
    }
    for (const tChar of t) {
        if (!charsCount.has(tChar)) return false;
        const charCount = charsCount.get(tChar)!;
        if (charCount === 0) return false;
        charsCount.set(tChar, charCount - 1);
    }
    return true;
}
