const CArray = require("./base");

/**
 * 插入排序
 *
 *
 */
CArray.prototype.insertionSort = function () {};

var num = 10;
var ca = new CArray(num);
ca.setData();
ca.insertionSort();
console.log(ca.toString());
