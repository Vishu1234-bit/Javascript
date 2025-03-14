/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumDepth(root) {
  if(root===null){
    return 0;
  }
  return 1+Math.max(binaryTreeMaximumDepth(root.left),binaryTreeMaximumDepth(root.right))
}
