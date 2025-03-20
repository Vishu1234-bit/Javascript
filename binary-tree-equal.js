/**
 * @param {TreeNode | null} a
 * @param {TreeNode | null} b
 * @return {boolean}
 */
export default function binaryTreeEqual(a, b) {
  if(!a && !b)return true;
  if(!a||!b||a.val!==b.val)return false;
  return binaryTreeEqual(a.left,b.left)&&binaryTreeEqual(a.right,b.right)
}
