/* eslint-disable no-console */
function Node(element) {
  this.element = element;
  this.next = null;
}
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.element);
    currNode = currNode.next;
  }
  console.log(currNode.element);
}

function findPrevious(item) {
  var currNode = this.head;
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
}

var ll = new LList();

ll.insert("one", "head");
ll.insert("two", "one");
ll.insert("three", "two");
ll.insert("four", "three");
ll.display();
ll.remove("two");
ll.display();
