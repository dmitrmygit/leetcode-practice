export {};

function isPalindrome(s: string): boolean {
    const filtered: number[] = [];
    const alphabetLength = 26;
    const aCode = 97;
    const ACode = 65;
    const zeroCode = 48;
    for (let i = 0; i < s.length; i++) {
        const code = s[i].charCodeAt(0);
        if (code >= aCode && code < aCode + alphabetLength) {
            filtered.push(code);
        } else if (code >= ACode && code < ACode + alphabetLength) {
            filtered.push(code + aCode - ACode);
        } else if (code >= zeroCode && code < zeroCode + 10) {
            filtered.push(code);
        }
    }
    const halfLength = Math.floor(filtered.length / 2);
    for (let i = 0; i < halfLength; i++) {
        if (filtered[i] !== filtered[filtered.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
