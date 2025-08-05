class TreeNode{
    constructor(val){
        this.val = val;
        this.left=this.right=null;
    }
}
function lowestCommonAncestor(root,p,q){
    if(root==null || root==p || root==q){
        return root;
    }
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(left && right){
        return root;
    }
    return left?left:right;
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);
console.log(lowestCommonAncestor(root,root.left.left,root.left.right).val)
