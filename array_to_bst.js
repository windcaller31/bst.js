function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(val){
  var push_node = new Node(val);
  if(!this.root){
    this.root = push_node;
    return ;
  }

  var current = this.root;
  while(current){
    if(val<current.value){
      if(!current.left){
        current.left=push_node;
        break;
      }else{
        current = current.left;
      }
    }else{
      if(!current.right){
        current.right = push_node;
        break;
      }else{
        current = current.right;
      }
    }
  }

};


var test_array = [5,3,8,9,1,4];
var test_bst = new BinarySearchTree();
for(var i=0; i<test_array.length;i++){
  test_bst.push(test_array[i]);
}
console.log(JSON.stringify(test_bst));
