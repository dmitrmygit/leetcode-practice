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

function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    levelOrderPrivate(root, 0, res);
    return res;
}

function levelOrderPrivate(root: TreeNode | null, level: number, res: number[][]): void {
    if (!root) return;
    if (!res[level]) res[level] = [];
    res[level].push(root.val);
    levelOrderPrivate(root.left, level + 1, res);
    levelOrderPrivate(root.right, level + 1, res);
}
