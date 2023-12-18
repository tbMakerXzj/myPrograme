/* eslint-disable */

/**
 * String.fromCharCode()
 * String.fromCodePoint()
 * String.raw()
 * String.prototype.charAt()
 * String.prototype.charCodeAt()
 * String.prototype.concat()
 * String.prototype.startsWith()
 * String.prototype.endsWith()
 * String.prototype.includes()
 * String.prototype.indexOf()
 * String.prototype.lastIndexOf()
 * String.prototype.localCompare()
 * String.prototype.match()  函数用于使用指定的正则表达式模式在当前字符串中进行匹配查找，并返回数组形式的查找结果。
 * String.prototype.matchAll()
 * String.prototype.normalize() 方法会按照指定的一种 Unicode 正规形式将当前字符串正规化（如果该值不是字符串，则首先将其转换为一个字符串）
 * String.prototype.padEnd(maxLength:number,fillString?:string)
 * String.prototype.padStart()
 * String.prototype.repeat()
 * String.prototype.replace()
 * String.prototype.search()
 * String.prototype.split(separator,limit?:number)
 * String.prototype.slice(startIndex:number,endIndex?:number) 方法提取字符串的某部分，并返回一个新的字符串。
 * String.prototype.substr(startIndex:number,length?:number)
 * String.prototype.substring(startIndex:number,indexEnd?:number)
 * String.prototype.toLowerCase()
 * String.prototype.toUpperCase()
 * // 去除字符串都不影响本身，返回新字符串
 * String.prototype.trim()
 * String.prototype.trimEnd()
 * String.prototype.trimStart()
 *
 */
const a = "hello,world!";
const str = "Code123Player34Code456";
// console.log(String.fromCharCode(65, 66, 67));
// console.log(String.fromCodePoint(65, 66, 67));
// console.log(String.raw({ raw: "foo" }));
// console.log(a.endsWith("world"));
// console.log(a.includes("world"));
// console.log(a.indexOf("", 100));
// console.log(a.lastIndexOf("l", 2));
// console.log("hello".lastIndexOf("l", 2));
// console.log(a.localeCompare("hello"));
// console.log(a.match(/l/g)); // 返回数组
// console.log(a.normalize("NFKC"));
// console.log(a.padEnd(20, "*"));
// console.log(a.repeat(3));
// console.log(str.replace(/Code(\d+)/g, "Player$1"));
// console.log(str.search(/Player(\d+)/g));
// console.log(a.slice(-4));
// console.log(str.split("", 6));
// console.log(a.substr(9, 2), a.length);
// console.log(a.substr(-20), a.length);
// console.log(a.substring(9, -1));
// console.log(a.toLowerCase(), a.toUpperCase());
