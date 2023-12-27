/* eslint-disable */
/**
 * add()
 * delete()
 * has()
 *
 *
 */
const a = [
  [1, 2],
  [3, 4],
];
const ws = new WeakSet(a);
ws.add(a);
console.log(ws.has(a));
