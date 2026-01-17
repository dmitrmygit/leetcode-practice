export {};

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const conditions = new Array<number[]>(numCourses);
    for (let i = 0; i < prerequisites.length; i++) {
        const arr = conditions[prerequisites[i][0]] ?? (new Array<number>(1));
        arr.push(prerequisites[i][1]);
        conditions[prerequisites[i][0]] = arr;
    }
    const visited = new Array<boolean>(numCourses);
    for (let i = 0; i < prerequisites.length; i++) {
        if (hasLoop(prerequisites[i][0], conditions, visited)) {
            return false;
        }
    }
    return true;
}

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
