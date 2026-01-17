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

function isSymmetric(root: TreeNode | null): boolean {
    return !!root && isSymmetricPrivate(root.left, root.right);
}

function isSymmetricPrivate(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    return !!left
        && !!right
        && left.val === right.val
        && isSymmetricPrivate(left.left, right.right)
        && isSymmetricPrivate(left.right, right.left);
}
