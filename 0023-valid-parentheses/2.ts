export {};

function isValid(s: string): boolean {
    const brackets = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    const structure: string[] = [];
    for (const item of s) {
        if (!brackets.has(item)) {
            structure.push(item);
        } else if (structure.length > 0) {
            const last = structure[structure.length - 1];
            if (brackets.get(item) === last) {
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
