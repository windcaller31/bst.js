/*
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
*/

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var convertBST = function(root) {
  if(root == null){
    return root;
  }
  var sum = 0;
  converArray(root,sum);
  return root;
};

function converArray(node,t_sum){
  var this_sum = t_sum;
  if(node.right){
    this_sum = converArray(node.right,this_sum);
  }
  node.val = node.val + this_sum;
  this_sum = node.val;
  if(node.left){
    this_sum = converArray(node.left,this_sum);
  }
  return this_sum;
}

var n1 = new TreeNode(3);
var n2 = new TreeNode(5);
var n3 = new TreeNode(2);

n3.left = new TreeNode(1);
n1.right = n2;
n2.left = new TreeNode(4);
n2.right = new TreeNode(6);
n1.left = n3;

convertBST([]);
