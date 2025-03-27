/**
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @return {boolean}
 */
export default function binaryTreeSubtree(root, subRoot) {
  if(!root){
    return false;
  }
  if(isIdentical(root,subRoot)){
    return true;
  }else{
    return binaryTreeSubtree(root.left,subRoot)||binaryTreeSubtree(root.right,subRoot);
  }
}
function isIdentical(tree1,tree2){
  if(!tree1&&!tree2){
    return true;
  }else if((!tree1||!tree2) ||tree1.val!=tree2.val ){
    return false;
  }else{
    return isIdentical(tree1.left,tree2.left) && isIdentical(tree1.right,tree2.right);
  }
}
