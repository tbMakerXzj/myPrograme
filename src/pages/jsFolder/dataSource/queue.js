/* eslint-disable no-console */
function Queue() {
  this.dataSource = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.isEmpty = isEmpty;
  this.toString = toString;
  this.dequeue1 = dequeue1;
}

function enqueue(element) {
  this.dataSource.push(element);
}

// 队列的出队
function dequeue() {
  return this.dataSource.shift();
}

function front() {
  return this.dataSource[0];
}

function back() {
  return this.dataSource[this.dataSource.length - 1];
}

// 队列的判断是否为空
function isEmpty() {
  return this.dataSource.length === 0;
}

function toString() {
  return this.dataSource.join();
}

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

function dequeue1() {
  var entry = 0;
  for (var i = 1; i < this.dataSource.length; i++) {
    if (this.dataSource[i].code < this.dataSource[entry].code) {
      entry = i;
    }
  }
  console.log(entry);
  return this.dataSource.splice(entry, 1);
}

const q = new Queue();
// q.enqueue("asdas");
// q.enqueue("asdasd");
// q.enqueue("fghfg");
// q.enqueue("zxc");
// console.log(q.toString());
// q.dequeue();
// console.log(q.toString());
// console.log(q.front(), q.back());
var p = new Patient("张三", 5);
q.enqueue(p);
p = new Patient("李四", 4);
q.enqueue(p);
p = new Patient("1王五", 6);
q.enqueue(p);
p = new Patient("2王五", 3);
q.enqueue(p);
p = new Patient("3王五", 1);
q.enqueue(p);
p = new Patient("4王五", 2);
var a = q.dequeue1();
console.log(a);
