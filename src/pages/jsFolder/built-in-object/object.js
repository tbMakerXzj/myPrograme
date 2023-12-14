/* eslint-disable */
const obj = { a: 1, b: 2, c: 3 };

/**
 * Object.create()
 * Object.defineProperties()
 * Object.defineProperty()
 * Object.getOwnPropertyDescriptor()
 * Object.getOwnPropertyDescriptors()
 * Object.getOwnPropertyNames()
 * Object.getPrototypeOf()
 * Object.isExtensible()
 * Object.freeze()
 * Object.isFrozen()
 * Object.seal() 方法用于标识指定对象为不可扩展，且所有现有 Property 均不可配置
 * Object.isSealed() 方法用于检测指定对象是否已被密封
 * Object.preventExtensions()
 * Object.keys() 方法用于获取指定对象自身可枚举 Property 组成的键名数组。
 * Object.setPrototypeOf() 方法用于设置一个指定的对象的原型 ( 即，内部 [[Prototype]] 属性）到另一个对象或 null。
 * Object.values()
 * Object.prototype.hasOwnProperty() 用于检测指定对象自有 Properties 中是否具有指定的 Property 自有属性
 * Object.prototype.isPrototypeOf() 方法用于测试指定对象是否存在于目标对象的原型链上
 * Object.prototype.prototypeIsEnumerable() 方法用于检测指定 Property 是否可枚举 自有属性
 * Object.prototype.toString() 方法用于表示指定对象的字符串
 */

// Object.create() 方法用于创建指定对象为原型对象的新对象。

// Object.defineProperties() 方法用于为一个对象定义 Properties 和/或修改已有的 Properties 的 Attributes。
/**
 *  configurable	false  描述属性是否配置，以及可否删除
    enumerable	false   枚举
    value	undefined   值
    writable	false   可修改
    get	undefined
    set undefined
 * 
 */

// Object.defineProperty(obj, "a", {
//   configurable: false,
//   value: 100,
//   writable: false,
// });

// delete obj.a;

// obj.a = 20;

// // 结合writable: false 和 configurable: false 就可以创建一个真正的常量属性（不可修改，不可重新定义或者删除）
// Object.defineProperty(obj, "a", {
//   value: "aaaa",
// });
// console.log(obj);

// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key} ${value}`);
//   // "a 5", "b 7", "c 9"
// }

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// });
// Object.defineProperty(obj, "a", {
//   value: 100,
// });

// Object.getOwnPropertyDescriptors() 方法用于获取一个对象的所有自身 Property 的 Attributes。
// console.log(Object.getOwnPropertyDescriptors(obj));

// Object.getOwnPropertyNames() 方法用于获取指定对象的所有自身 Property 的键名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。
// const sb = Symbol("d");
// Object.defineProperty(obj, sb, {
//   value: 4,
//   enumerable: false,
//   configurable: false,
//   writable: true,
// });
// console.log(Object.getOwnPropertyNames(obj));

// Object.getOwnPropertySymbols() 方法用于获取一个给定对象自身的所有 Symbol Property 的数组。
// console.log(Object.getOwnPropertySymbols(obj));

// Object.getPrototypeOf() 方法用于获取指定对象的原型（内部 [[Prototype]] 属性的值）。
// const foo = function () {};

// console.log(Object.getPrototypeOf(foo) === Function.prototype);

// Object.isExtensible() 方法用于检测指定对象是否可扩展。
// console.log(Object.isExtensible(obj));

// Object.freeze() 与 Object.seal() 比较
// var foo = { a: 1, b: 2 };
// var foo1 = { a: 1, b: 2 };
// console.log(Object.getOwnPropertyDescriptors(foo), Object.getOwnPropertyDescriptors(foo1));

// Object.seal(foo);
// foo.a = 3;
// // {
// //   a: { value: 3, writable: true, enumerable: true, configurable: false },
// //   b: { value: 2, writable: true, enumerable: true, configurable: false }
// // }
// console.log(Object.getOwnPropertyDescriptors(foo));

// Object.freeze(foo1);
// // {
// //   a: { value: 1, writable: false, enumerable: true, configurable: false },
// //   b: { value: 2, writable: false, enumerable: true, configurable: false }
// // }
// console.log(Object.getOwnPropertyDescriptors(foo1));
// Object.preventExtensions(foo);
// console.log(Object.getOwnPropertyDescriptors(foo));
// console.log(Object.entries(obj));

const map = new Map(Object.entries(obj));
console.log(map);
