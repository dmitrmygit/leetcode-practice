export {};

function groupAnagrams(strs: string[]): string[][] {
    const alphabetLength = 26;
    const aCharCode = 97;
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const chars = Array.from({length: alphabetLength}, () => 0);
        for (const char of str) {
            chars[char.charCodeAt(0) - aCharCode]++;
        }
        const charsStr = chars.toString();
        const group = map.get(charsStr);
        if (!!group) {
            group.push(str);
        } else {
            map.set(charsStr, [str]);
        }
    }
    return Array.from(map.values());
}
