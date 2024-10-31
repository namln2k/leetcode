/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }

  return isChildSymmetric(root.left, root.right)
}

var isChildSymmetric = function (left, right) {
  if (!left && !right) {
    return true
  }

  if (!left || !right) {
    return false
  }

  return (
    left.val === right.val &&
    isChildSymmetric(left.left, right.right) &&
    isChildSymmetric(left.right, right.left)
  )
}
