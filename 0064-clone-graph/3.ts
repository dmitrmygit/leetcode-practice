export {};

// Definition for _Node.
class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

function cloneGraph(node: _Node | null): _Node | null {
    return cloneGraphPrivate(node, Array.from({length: 101}));
}

function cloneGraphPrivate(node: _Node, stored: _Node[]): _Node;
function cloneGraphPrivate(node: _Node | null, stored: _Node[]): _Node | null;
function cloneGraphPrivate(node: _Node | null, stored: _Node[]): _Node | null {
    if (!node) return null;
    const storedItem = stored[node.val];
    if (storedItem) return storedItem;
    const newNode = new _Node(node.val);
    stored[node.val] = newNode;
    for (const neighbor of node.neighbors) {
        newNode.neighbors.push(cloneGraphPrivate(neighbor, stored));
    }
    return newNode;
}
