// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var averageOfLevels = function(root) {
  var tree_q = [];
  tree_q.push(root);
  var line = [];
  var last_node = null;
  var lastNodeOfThisLine = root;
  var result = [];
  while(tree_q[0]){
    var node = tree_q.shift();
    if(node.left){
      tree_q.push(node.left)
      last_node = node.left;
    }
    if(node.right){
      tree_q.push(node.right)
      last_node = node.right;
    }
    line.push(node.val);
    if( node == lastNodeOfThisLine ){
      result.push(line);
      if(last_node==lastNodeOfThisLine){
        break;
      }
      lastNodeOfThisLine = last_node;
      line=[];
    }
  }
  var r_result = [];
  for(var i=0;i<result.length;i++){
    var s = 0;
    for(var j=0;j<result[i].length;j++){
      s+=result[i][j];
    }
    r_result.push( Math.floor(s)/result[i].length );
  }
  return r_result;
};

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);
var n6 = new TreeNode(6);


n1.left = n2;
n1.right = n5;
n2.left = n4;
n2.right = n3;
n5.left = n6;

console.log(averageOfLevels(n1));
