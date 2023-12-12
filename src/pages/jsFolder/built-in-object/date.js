/* eslint-disable */
/**
 * 用法一：不带 new 操作符时
 * 用法二：使用 new 操作符
 * 用法三：可接受一个数字参数（ Number 数据类型）
 * 用法四：可接受一个字符串参数（String 数据类型）
 *
 *
 */
var date = Date("2023-10-11");
var date1 = new Date();
var date2 = new Date(1654564564560);
var date3 = new Date("2023-10-11");
var date4 = Date.now();
var date5 = Date.parse("2023-10-11");
var date6 = Date.UTC(2023, 10, 11);
// console.log(date);
// console.log(date3.getFullYear(), date3.getUTCFullYear());
// console.log(date1, date2, date3);
// console.log(date4, date5, date6);
console.log(parseInt("123e"));
