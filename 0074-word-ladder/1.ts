export {};

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (!wordList.includes(endWord)) return 0;
    wordList = wordList.slice();
    wordList.push(beginWord);
    const ignoreMap = new Map<string, boolean>();
    ignoreMap.set(beginWord, true);
    const maskMap = new Map<string, string[]>();
    const wordMap = new Map<string, Set<string>>();
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        for (let j = 0; j < word.length; j++) {
            const mask = word.slice(0, j) + '*' + word.slice(j + 1);
            const maskMapValue = maskMap.get(word) ?? [];
            maskMapValue.push(mask);
            maskMap.set(word, maskMapValue);
            const wordMapValue = wordMap.get(mask) ?? new Set<string>();
            wordMapValue.add(word);
            wordMap.set(mask, wordMapValue);
        }
    }

    let queue = [beginWord];
    for (let step = 1; !!queue.length; step++) {
        const newQueue: string[] = [];
        for (const item of queue) {
            if (item === endWord) return step;
            const masks = maskMap.get(item);
            if (!masks) continue;
            for (const mask of masks) {
                const words = wordMap.get(mask);
                if (!words) continue;
                for (const word of words) {
                    if (ignoreMap.has(word)) continue;
                    newQueue.push(word);
                    ignoreMap.set(word, true);
                }
            }
        }
        queue = newQueue;
    }
    return 0;
}
