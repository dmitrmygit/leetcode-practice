export {};

function isPalindrome(x: number): boolean {
    const str = ('' + x).split('');
    const checkLength = Math.floor(str.length / 2);
    for (let i = 0; i < checkLength; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}
