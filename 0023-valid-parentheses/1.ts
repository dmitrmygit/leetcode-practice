export {};

function isValid(s: string): boolean {
    const structure: string[] = [];
    for (const item of s) {
        if (item === '(' || item === '{' || item === '[') {
            structure.push(item);
        } else if (structure.length > 0) {
            const last = structure[structure.length - 1];
            if ((item === ')' && last === '(') || (item === '}' && last === '{') || (item === ']' && last === '[')) {
                structure.pop();
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return structure.length === 0;
}
