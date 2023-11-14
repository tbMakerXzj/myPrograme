const CArray = require("./base");
CArray.prototype.bubbleSort = function () {
  var numElements = this.dataStore.length;
  for (var i = numElements; i >= 2; i--) {
    for (var j = 0; j <= i - 1; j++) {
      if (this.dataStore[j] > this.dataStore[j + 1]) {
        this.swap(this.dataStore, j, j + 1);
      }
    }
  }
};

var num = 10000;
var myNumArr = new CArray(num);
myNumArr.setData();
var startTime = new Date().getTime();
myNumArr.bubbleSort();
var endTime = new Date().getTime();
// console.log(myNumArr.toString());
console.log("bubbleSort: " + (endTime - startTime) + "ms");
