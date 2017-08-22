// Given a binary search tree (BST) with duplicates,
// find all the mode(s) (the most frequently occurred element) in the given BST.
// Assume a BST is defined as follows:

function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
}

var findMode = function(root) {
  if(root == null){
    return [];
  }
  var result = {};
  getMode(root,result);
  var max = 0;
  for(key in result){
    var v = result[key];
    if(max<=v){
      max = v;
    }
  }
  var r_array = [];
  for(key in result){
    var v = result[key];
    if(max==v){
      r_array.push(Number(key));
    }
  }
  return r_array;
};

function getMode(node,result){
  if(node.left!=null){
    getMode(node.left,result);
  }
  result[node.val] = (result[node.val]||0) + 1;
  if(node.right!=null){
    getMode(node.right,result);
  }
}

var n1 = new TreeNode(5);
var n2 = new TreeNode(3);
var n3 = new TreeNode(4);
var n4 = new TreeNode(2);
var n5 = new TreeNode(7);


n1.left = n2;
n2.right = n3;
n2.left = n4;
n1.right = n5;
n5.left = new TreeNode(5);

findMode(n1);
