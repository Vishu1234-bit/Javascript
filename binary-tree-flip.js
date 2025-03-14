/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export default function binaryTreeFlip(root) {
  if(root===null){
    return 0;
  }
  
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  
  binaryTreeFlip(root.left);
  binaryTreeFlip(root.right);
  return root
}
