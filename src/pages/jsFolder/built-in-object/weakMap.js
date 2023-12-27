/* eslint-disable */

/**
 * WeakMap 其键必须是对象
 * get()
 * set()
 * has()
 * delete()
 */

const x = new WeakMap();
const y = new WeakMap();

const a = {};
const b = function () {};
// const c = window;

x.set(a, 100);
x.set(b, "BINGO!");

y.set(a, b);
// y.set(c, undefined);
y.set(x, y);

x.get(b);
// 'BINGO!'

y.get(b);
// undefined
// y.get(c);
// undefined

x.has(b);
// true

y.has(b);
// false
// y.has(c);
// true

// delete()
x.has(a);
// true
x.delete(a);
x.has(a);
// false
