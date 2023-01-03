/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0 || inorder.length === 0) return null;

    // 前序遍历的第一个节点定然是当前树的根节点，构建树节点
    const root = new TreeNode(preorder[0]);

    // 拿 root 把中序遍历的数组劈开，左边为左子树，右边为右子树
    let rootIndex = inorder.findIndex(item => item === preorder[0]);
    if (rootIndex === -1) return null;
    preorder.shift(); // 删除掉先序遍历的根节点

    // 左边的数组定然全部都是当前根节点的左子树上的节点
    root.left = buildTree(preorder, inorder.slice(0, rootIndex));
    // 右边的数组定然全部都是当前根节点的右子树上的节点
    root.right = buildTree(preorder, inorder.slice(rootIndex + 1));
    
    return root;
};
// @lc code=end

