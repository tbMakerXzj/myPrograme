const CArray = require("./base");

CArray.prototype.shellSort = function () {
  //   var gap = Math.floor(this.dataStore.length / 2);
  var n = this.dataStore.length;
  var h = 1;
  while (h <= n / 3) {
    h = 3 * h + 1;
  }
  while (h > 0) {
    for (var i = h; i < this.dataStore.length; i++) {
      var temp = this.dataStore[i];
      var j = i;
      while (j >= h && this.dataStore[j - h] > temp) {
        this.swap(this.dataStore, j, j - h);
        j -= h;
      }
    }
    // gap = Math.floor(gap / 2);
    h = (h - 1) / 3;
  }
};

var num = 10000;
var myNumArray = new CArray(num);
myNumArray.setData();
var startTime = new Date().getTime();
myNumArray.shellSort();
var endTime = new Date().getTime();
// console.log(myNumArray.toString());
console.log("shellSort time: " + (endTime - startTime) + "ms");
