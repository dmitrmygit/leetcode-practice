export {};

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const conditions = new Array<number[]>(numCourses);
    for (const prerequisite of prerequisites) {
        const arr = conditions[prerequisite[0]] ?? [];
        arr.push(prerequisite[1]);
        conditions[prerequisite[0]] = arr;
    }
    const visited = new Array<boolean>(numCourses);
    for (const prerequisite of prerequisites) {
        if (hasLoop(prerequisite[0], conditions, visited)) {
            return false;
        }
    }
    return true;
};

function hasLoop(val: number, conditions: number[][], visited: boolean[]): boolean {
    if (visited[val]) return true;
    const arr = conditions[val];
    if (!arr) return false;
    visited[val] = true;
    while (arr.length > 0) {
        if (hasLoop(arr[arr.length - 1], conditions, visited)) return true;
        arr.pop();
    }
    visited[val] = false;
    return false;
}
