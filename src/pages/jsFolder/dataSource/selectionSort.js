const CArray = require("./base");

/**
 * 选择排序
 *      每次将找到最小的数据，移到最前
 */
CArray.prototype.selectionSort = function () {
  var numElements = this.dataStore.length;

  for (var i = 0; i < numElements - 2; i++) {
    var min = this.dataStore[i];
    var minIndex = i;

    //find the smallest element and swap it with the first element
    for (var j = i + 1; j <= numElements - 1; j++) {
      if (this.dataStore[j] < min) {
        min = this.dataStore[j];
        minIndex = j;
      }
    }

    this.swap(this.dataStore, minIndex, i);
  }
};

var num = 10;
var ca = new CArray(num);
ca.setData();
ca.selectionSort();
console.log(ca.toString());
