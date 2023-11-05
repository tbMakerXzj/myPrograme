function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
}

function Node(left, right, data) {
  this.left = left;
  this.right = right;
  this.data = data;
  this.show = show;
}

function show() {
  return this.data;
}

function insert(data) {
  var newNode = new Node(null, null, data);
  if (this.root === null) {
    this.root = newNode;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = newNode;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = newNode;
          break;
        }
      }
    }
  }
}

// 遍历顺序  先序、中序、后序 父节点在叶子节点前 为先 中 为后 后 为后
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (node !== null) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show());
  }
}

function getMin() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while (current !== null) {
    if (data < current.data) {
      current = current.left;
    } else if (data > current.data) {
      current = current.right;
    } else {
      return current;
    }
  }
  return null;
}

var bst = new BST();
bst.insert(20);
bst.insert(15);
bst.insert(10);
bst.insert(17);
bst.insert(13);
bst.insert(25);
bst.insert(12);
bst.insert(14);
bst.insert(18);
bst.insert(23);
bst.insert(19);

// bst.inOrder(bst.root);
// bst.preOrder(bst.root);
// bst.postOrder(bst.root);
console.log(bst.getMin(), bst.getMax(), bst.find(113));
