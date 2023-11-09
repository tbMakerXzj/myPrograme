function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i < numElements; i++) {
    this.dataStore[i] = i;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retStr = ""; // start with an empty string
  for (var i = 0; i < this.numElements; i++) {
    retStr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 === 0) {
      retStr += "\n";
    }
  }
  return retStr;
}

function clear() {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = 0;
  }
}

function setData() {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// var numElements = 100;
// var myNumArr = new CArray(numElements);
// myNumArr.setData();
// console.log(myNumArr.toString());
module.exports = CArray;
