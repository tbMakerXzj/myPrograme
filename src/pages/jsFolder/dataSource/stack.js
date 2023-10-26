function Stack() {
  this.dataSource = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataSource[this.top++] = element;
}

function pop() {
  return this.dataSource[--this.top];
}

// 返回栈顶元素
function peek() {
  return this.dataSource[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

function isPlaid(word) {
  var s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }

  var rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  return rword === word;
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();
s.peek();
s.clear();
// s.length();
// print(s);
console.log(isPlaid("hello"), isPlaid("level"));
