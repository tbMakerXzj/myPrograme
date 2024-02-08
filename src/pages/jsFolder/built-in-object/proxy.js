/* eslint-disable */
/**
 * target 参数表示所要拦截的目标对象，handler 参数也是一个对象，用于定制拦截行为。
 * Proxy(target,handler)
 * handler.get
 * handler.set
 * handler.has
 * handler.deleteProperty
 * handler.ownKeys
 * handler.getOwnPropertyDescriptor
 * handler.defineProperty
 * handler.preventExtensions
 * handler.getPrototypeOf
 * handler.isExtensions
 * handler.setPrototypepOf
 * handler.apply
 * handler.construct
 * revocable
 *
 *
 */
function invariant(key, action) {
  if (key[0] === "_") {
    throw new Error(`Invalid attempt to ${action} private ${key} property`);
  }
}

const target = { _prop: "foo", prop: "foo", baz: "tar" };

const desc = {
  configurable: true,
  enumerable: true,
  value: 10,
};

const proxy = new Proxy(target, {
  get: function (target, property, receiver) {
    console.log(111, target, property);
    return Reflect.get(target, property);
  },
  set: function (target, property, value, receiver) {
    target[property] = value;
  },
  has: function (target, prop) {
    if (prop[0] === "_") {
      return false;
    }
    return prop in target;
  },
  deleteProperty: function (target, property) {
    invariant(property, "delete");
    delete target[property];
    return true;
  },
  getOwnPropertyDescriptor: function (target, key) {
    if (key[0] === "_") {
      return;
    }
    return Object.getOwnPropertyDescriptor(target, key);
  },
  defineProperty: function (target, property, descriptor) {
    console.log(property);
    return Reflect.defineProperty(target, property, descriptor);
  },
  preventExtensions: function (target) {
    Object.preventExtensions(target);
    return true;
  },
  getPrototypeOf: function (target) {
    return Object.getPrototypeOf(target);
  },
  isExtensible: function (target) {
    return Object.isExtensible(target);
  },
  setPrototypeOf: function (target, proto) {
    return Object.setPrototypeOf(target, proto);
  },
  apply: function (target, thisArg, argumentsList) {
    return target.apply(thisArg, argumentsList);
  },
});
// delete proxy._prop;
// console.log("_prop" in proxy);
// console.log(proxy.baz);
// console.log(Object.getOwnPropertyDescriptor(proxy, "baz"));
// console.log(Object.getOwnPropertyDescriptor(proxy, "_prop"));
// Object.defineProperty(proxy, "_prop", desc);
// console.log(Object.preventExtensions(proxy));
// console.log(proxy);
// console.log(Object.isExtensible(proxy));
// console.log(Object.getPrototypeOf(proxy));
// console.log(Object.setPrototypeOf(proxy, {}));
// const twice = {
//   apply(target, context, args) {
//     return Reflect.apply(...arguments) * 2;
//   },
// };

// const sum = function (left, right) {
//   return left + right;
// };

// const proxy1 = new Proxy(sum, twice);

// console.log(proxy1(1, 2));

// console.log(proxy1.call(null, 5, 6));

// console.log(proxy1.apply(null, [7, 8]));
// // 30
// const proxy2 = new Proxy(
//   {},
//   {
//     construct: function (target, argumentsList, newTarget) {
//       console.log(target, argumentsList, newTarget);
//     },
//   }
// );
// console.log(new proxy2(1).value);