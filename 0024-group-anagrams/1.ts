export {};

function groupAnagrams(strs: string[]): string[][] {
    const res: string[][] = [];
    const charsArr: Map<string, number>[] = [];
    for (const str of strs) {
        const chars = new Map<string, number>();
        for (const char of str) {
            chars.set(char, (chars.get(char) ?? 0) + 1);
        }
        let anagramIndex: number = -1;
        for (let i = 0; i < charsArr.length; i++) {
            if (charsArr[i].size !== chars.size) continue;
            let same = true;
            for (const entry of charsArr[i].entries()) {
                if (chars.get(entry[0]) !== entry[1]) {
                    same = false;
                    break;
                }
            }
            if (same) {
                anagramIndex = i;
                break;
            }
        }
        if (anagramIndex === -1) {
            res.push([str]);
            charsArr.push(chars);
        } else {
            res[anagramIndex].push(str);
        }
    }
    return res;
}
