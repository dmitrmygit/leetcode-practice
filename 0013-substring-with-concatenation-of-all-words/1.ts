export {};

function findSubstring(s: string, words: string[]): number[] {
    const res: number[] = [];
    const wordLength = words[0].length;
    const wordsLength = words.length * wordLength;
    const wordMap = new Map<string, number>();
    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) ?? 0) + 1);
    }
    for (let i = 0; i < s.length && i + wordsLength <= s.length; i++) {
        const seenMap = new Map<string, number>();
        let count = 0;
        while (count < words.length) {
            const word = s.substring(i + count * wordLength, i + (count + 1) * wordLength);
            if (wordMap.has(word)) {
                seenMap.set(word, (seenMap.get(word) ?? 0) + 1);
                if (seenMap.get(word)! > wordMap.get(word)!) {
                    break;
                }
                count++;
            } else {
                break;
            }
        }
        if (count === words.length) {
            res.push(i);
        }
    }
    return res;
}
