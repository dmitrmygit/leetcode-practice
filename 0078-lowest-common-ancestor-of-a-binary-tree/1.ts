export {};

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    return lowestCommonAncestorPrivate(root, p, q).node;
}

function lowestCommonAncestorPrivate(root: TreeNode | null, p: TreeNode, q: TreeNode): {
    state: 'p' | 'q' | 'r' | null,
    node: TreeNode | null
} {
    if (!root) return {state: null, node: null};
    const left = lowestCommonAncestorPrivate(root.left, p, q);
    if (left.state === 'r') return left;
    const right = lowestCommonAncestorPrivate(root.right, p, q);
    if (right.state === 'r') return right;
    const hasP = root.val === p.val || left.state === 'p' || right.state === 'p';
    const hasQ = root.val === q.val || left.state === 'q' || right.state === 'q';
    if (hasP && hasQ) return {state: 'r', node: root};
    if (hasP) {
        if (left.state === 'p') return left;
        if (right.state === 'p') return right;
        return {state: 'p', node: root};
    }
    if (hasQ) {
        if (left.state === 'q') return left;
        if (right.state === 'q') return right;
        return {state: 'q', node: root};
    }
    return {state: null, node: null};
}
