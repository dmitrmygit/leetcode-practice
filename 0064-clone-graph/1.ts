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
    return cloneGraphPrivate(node, new Map<number, _Node>());
}

function cloneGraphPrivate(node: _Node, stored: Map<number, _Node>): _Node;
function cloneGraphPrivate(node: _Node | null, stored: Map<number, _Node>): _Node | null;
function cloneGraphPrivate(node: _Node | null, stored: Map<number, _Node>): _Node | null {
    if (!node) return null;
    if (stored.has(node.val)) return stored.get(node.val)!;
    const newNode = new _Node(node.val);
    stored.set(node.val, newNode);
    newNode.neighbors = node.neighbors.map(n => cloneGraphPrivate(n, stored));
    return newNode;
}
