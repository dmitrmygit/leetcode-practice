export {};

function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n <= 2) {
        return Array.from({length: n}, (_, i) => i);
    }

    const directions = Array.from({length: n}, () => new Set<number>());
    for (const [a, b] of edges) {
        directions[a].add(b);
        directions[b].add(a);
    }

    let leaves: number[] = [];
    for (let i = 0; i < n; i++) {
        if (directions[i].size === 1) {
            leaves.push(i);
        }
    }

    let remaining = n;
    while (remaining > 2) {
        remaining -= leaves.length;
        const newLeaves: number[] = [];
        for (const leave of leaves) {
            const neighbour = directions[leave].values().next().value!;
            directions[neighbour].delete(leave);
            if (directions[neighbour].size === 1) {
                newLeaves.push(neighbour);
            }
        }
        leaves = newLeaves;
    }
    return leaves;
}
