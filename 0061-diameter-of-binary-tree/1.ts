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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;
    const total = {value: 0};
    diameterOfBinaryTreePrivate(root, total);
    return total.value;
}

function diameterOfBinaryTreePrivate(node: TreeNode | null, total: { value: number }): number {
    if (!node) return 0;
    const left = diameterOfBinaryTreePrivate(node.left, total);
    const right = diameterOfBinaryTreePrivate(node.right, total);
    total.value = Math.max(total.value, left + right);
    return Math.max(left, right) + 1;
}
