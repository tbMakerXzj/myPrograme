function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
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

function getMin(node) {
  var current = node;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

function getMax(node) {
  var current = node;
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

function remove(data) {
  root = removeNode(this.root, data);
}

// 删除节点函数，参数node为要删除的节点，data为要删除的节点的数据
function removeNode(node, data) {
  // 如果节点为空，则返回空
  if (node === null) {
    return null;
  }
  // 如果要删除的节点数据等于当前节点数据，则判断当前节点左右子节点是否为空
  if (data === node.data) {
    // 如果左右子节点都为空，则返回空
    if (node.left === null && node.right === null) {
      return null;
    }
    // 如果左子节点为空，则返回右子节点
    if (node.left === null) {
      return node.right;
    }
    // 如果右子节点为空，则返回左子节点
    if (node.right === null) {
      return node.left;
    }
    // 获取右子节点最小值节点
    var tempNode = getMin(node.right);
    // 将当前节点数据设置为最小值节点的数据
    node.data = tempNode.data;
    // 递归调用删除右子节点最小值节点
    node.right = removeNode(node.right, tempNode.data);
    // 返回当前节点
    return node;
    // 如果要删除的节点数据小于当前节点数据，则递归调用删除左子节点
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
    // 如果要删除的节点数据大于当前节点数据，则递归调用删除右子节点
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
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
console.log(bst.getMin(bst.root), bst.getMax(bst.root), bst.find(113));
