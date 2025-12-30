export {};

function groupAnagrams(strs: string[]): string[][] {
    const aCharCode = 'a'.charCodeAt(0);
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const chars = new Uint8Array(26);
        for (const s of str) {
            chars[s.charCodeAt(0) - aCharCode]++;
        }
        let charsStr = '';
        for (const char of chars) {
            charsStr += '#' + char;
        }
        const group = map.get(charsStr);
        if (!!group) {
            group.push(str);
        } else {
            map.set(charsStr, [str]);
        }
    }
    return Array.from(map.values());
}
