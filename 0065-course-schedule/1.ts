export {};

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const conditions = new Array(numCourses);
    for (const prerequisite of prerequisites) {
        const arr = conditions[prerequisite[0]] ?? [];
        arr.push(prerequisite[1]);
        conditions[prerequisite[0]] = arr;
    }
    for (const prerequisite of prerequisites) {
        if (hasLoop(prerequisite[0], conditions, new Set())) {
            return false;
        }
    }
    return true;
}

function hasLoop(val: number, conditions: number[][], visited: Set<number>): boolean {
    if (visited.has(val)) return true;
    const arr = conditions[val];
    if (!arr) return false;
    visited.add(val);
    while (arr.length > 0) {
        if (hasLoop(arr[arr.length - 1], conditions, visited)) return true;
        arr.pop();
    }
    visited.delete(val);
    return false;
}
