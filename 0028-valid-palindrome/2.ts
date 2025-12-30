export {};

const alphabetLength = 26;
const aCode = 97;
const ACode = 65;
const zeroCode = 48;

function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        let leftCode = getCode(s[left]);
        while (left + 1 <= right && leftCode === null) {
            left++;
            leftCode = getCode(s[left]);
        }
        let rightCode = getCode(s[right]);
        while (left + 1 <= right && rightCode === null) {
            right--;
            rightCode = getCode(s[right]);
        }
        if (left > right) break;
        if (leftCode !== rightCode) return false;
        left++;
        right--;
    }
    return true;
}

function getCode(char: string): number | null {
    const code = char.charCodeAt(0);
    if (code >= aCode && code < aCode + alphabetLength) {
        return code;
    } else if (code >= ACode && code < ACode + alphabetLength) {
        return code + aCode - ACode;
    } else if (code >= zeroCode && code < zeroCode + 10) {
        return code;
    }
    return null;
}
