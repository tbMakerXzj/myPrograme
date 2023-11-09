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

var num = 10;
var myNumArr = new CArray(num);
myNumArr.setData();
myNumArr.bubbleSort();
console.log(myNumArr.toString());
