const CArray = require("./base");

/**
 * 插入排序
 *
 *
 */
CArray.prototype.insertionSort = function () {
  var numElements = this.dataStore.length;

  for (var i = 1; i < numElements; i++) {
    var key = this.dataStore[i];
    var j = i;
    while (j > 0 && this.dataStore[j - 1] >= key) {
      this.dataStore[j] = this.dataStore[j - 1];
      j--;
    }
    this.dataStore[j] = key;
  }
};

var num = 10000;
var ca = new CArray(num);
ca.setData();
var startTime = new Date().getTime();
ca.insertionSort();
var endTime = new Date().getTime();
console.log("insertionSort:" + (endTime - startTime) + "ms");
