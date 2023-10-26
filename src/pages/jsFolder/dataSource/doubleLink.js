/**
 *
 * @param {*} element
 *
 * this.head.next == this.head;
 * 单向链表改为循环链表
 *
 * display 判断是否为最后一个元素
 */
function Node(element) {
  this.pre = null;
  this.element = element;
  this.next = null;
}

function doubleLink() {
  this.head = new Node("head");
  this.head.next == this.head;
  this.insert = insert;
  this.find = find;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  var cur = this.head;
  while (cur.element !== item) {
    cur = cur.next;
  }
  return cur;
}

function insert(newItem, item) {
  var newNode = new Node(newItem);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.pre = current;
  current.next = newNode;
}

function remove(item) {
  var current = this.find(item);
  while (current.next !== null) {
    current.pre.next = current.next;
    current.next.pre = current.pre;
    current.next = null;
    current.pre = null;
  }
}

function display() {
  var current = this.head;
  while (current.next !== null && current.next !== this.head) {
    console.log(current.element);
    current = current.next;
  }
}

var dl = new doubleLink();
dl.insert("1", "head");
dl.insert("2", "1");
dl.insert("3", "2");
dl.insert("4", "3");
dl.insert("5", "4");
dl.display();
dl.remove("3");
dl.display();
