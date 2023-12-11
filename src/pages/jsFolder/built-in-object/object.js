const obj = { a: 1, b: 2, c: 3 };

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
const sb = Symbol("d");
Object.defineProperty(obj, sb, {
  value: 4,
  enumerable: false,
  configurable: false,
  writable: true,
});
// console.log(Object.getOwnPropertyNames(obj));

// Object.getOwnPropertySymbols() 方法用于获取一个给定对象自身的所有 Symbol Property 的数组。
// console.log(Object.getOwnPropertySymbols(obj));

// Object.getPrototypeOf() 方法用于获取指定对象的原型（内部 [[Prototype]] 属性的值）。
// const foo = function () {};

// console.log(Object.getPrototypeOf(foo) === Function.prototype);
