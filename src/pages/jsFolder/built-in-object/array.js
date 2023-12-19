/* eslint-disable */
/**
 * 数组检测
 * Array.isArray()  instanceof Object.prototype.toString.call()
 * arr.__proto__.constructor
 * Array.isArray()
 * Array.from() 方法用于将一个类数组对象或可迭代对象转换成一个新的数组实例
 * Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
 * Array.prototype.concat()
 * Array.prototype.includes(searchElement,fromIndex?:number)
 * Array.prototype.indexOf()
 * Array.prototype.join()
 * Array.prototype.lastIndexOf(searchElement,fromIndex?:number)
 * Array.prototype.slice(start,end?:number)
 * Array.prototype.flat() 方法会按照一个可指定的深度递归遍历数组
 * Array.prototype.flatMap()
 * Array.prototype.copyWithin()
 * Array.prototype.entries()  方法返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键值对
 * Array.prototype.every()
 * Array.prototype.filter()
 * Array.prototype.find()
 * Array.prototype.findIndex()
 * Array.prototype.forEach()
 * Array.prototype.keys()
 * Array.prototype.map()
 * Array.prototype.some()
 * Array.prototype.fill()
 * Array.prototype.pop()
 * Array.prototype.push()
 * Array.prototype.shift()
 * Array.prototype.unshift()
 * Array.prototype.sort()
 * Array.prototype.splice()
 * Array.prototype.reduce()
 * Array.prototype.reduceRight()
 *
 */
var arr = [1, 2, 2, 3, 4, 5];
// console.log(Array.from(arr));
// console.log(Array.of(1, 2, 3, 4, 5));
// console.log(arr.lastIndexOf(21));
// console.log(arr.slice(1, 3));
// console.log(arr.copyWithin(3, 1, 2));
// console.log(arr.entries().next());
// arr.filter((value, index, arr) => {}, arr);
console.log(arr.keys());
