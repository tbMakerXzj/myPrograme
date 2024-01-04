/* eslint-disable */
/**
 * target 参数表示所要拦截的目标对象，handler 参数也是一个对象，用于定制拦截行为。
 * Proxy(target,handler)
 * handler.get
 * handler.set
 *
 *
 */
const proxy = new Proxy(
  {},
  {
    get: function (target, property, receiver) {
      console.log(`getting ${property}`, target, property, receiver);
      return target[property];
    },
    set: function (target, property, value, receiver) {
      console.log(`setting ${property}`);
      target[property] = value;
    },
  }
);

proxy.count = 1;
proxy.count;
proxy.name = "张三"; //setting name
console.log(proxy);
