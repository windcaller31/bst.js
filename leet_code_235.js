/*
Given a binary search tree (BST),
find the lowest common ancestor (LCA) of two given nodes in the BST.
According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants
(where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example,
the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2,
since a node can be a descendant of itself according to the LCA definition.
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
  if(root == null){
    return root;
  }
  if( (root.val>=p.val&&root.val<=q.val) || (root.val<=p.val&&root.val>=q.val) ){
    return root;
  }

  if(root.val>=p.val&&root.val>=q.val){
    return lowestCommonAncestor(root.left,p,q);
  }

  if(root.val<=p.val&&root.val<=q.val){
    return lowestCommonAncestor(root.right,p,q);
  }
};



// var n1 = new TreeNode(5);
// var n2 = new TreeNode(3);
// var n3 = new TreeNode(4);
// var n4 = new TreeNode(2);
// var n5 = new TreeNode(7);
//
//
// n1.left = n2;
// n2.right = n3;
// n2.left = n4;
// n1.right = n5;

var n1 = new TreeNode(2);
var n2 = new TreeNode(1);
n1.left = n2;

//5,4,2
console.log(lowestCommonAncestor(n1,new TreeNode(2),new TreeNode(1)));
