function longestCommonPrefix(strs: string[]): string {
    let res = '';
    if (strs.length === 0) return res;
    const first = strs[0];
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== first[i]) {
                return res;
            }
        }
        res += first[i];
    }
    return res;
}
