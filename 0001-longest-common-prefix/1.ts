function longestCommonPrefix(strs: string[]): string {
    let res = '';
    if (strs.length === 0) return res;
    for (let i = 0; true; i++) {
        let resItem: string | null = null;
        for (let j = 0; j < strs.length; j++) {
            if (j === 0) {
                if (i < strs[j].length) {
                    resItem = strs[j][i];
                }
            } else if (i >= strs[j].length || !resItem || strs[j][i] !== resItem) {
                return res;
            }
        }
        if (!!resItem) {
            res += resItem;
        } else {
            return res;
        }
    }
}
