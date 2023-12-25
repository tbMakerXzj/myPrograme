/* eslint-disable */
/**
 * map
 * size()
 * set()
 * get()
 * has()
 * delete()
 * clear()
 * keys()
 * values()
 * entries()
 * 以基本类型值作为键名
 */
const map = new Map();

map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
// map.delete("city");
// console.log(map);
// console.log(map.size);
// console.log(map.get("name"));
// map.clear();
// console.log(map);
// for (const keys of map.keys()) {
//   console.log(keys);
// }
// for (const values of map.values()) {
//   console.log(values);
// }
// for ([key, value] of map.entries()) {
//   console.log(key, value);
// }
// const keys = map.keys();
// for (let i = 0; i < map.size; i++) {
//   const key = keys.next().value;
//   console.log(key);
// }

// const values = map.values();
// for (let i = 0; i < map.size; i++) {
//   value = values.next().value;
//   console.log(value);
// }

// const entries = map.entries();
// for (i = 0; i < map.size; i++) {
//   entry = entries.next().value;
//   console.log(entry[0], entry[1]);
// }
// const first = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);

// const second = new Map([
//   [1, "uno"],
//   [2, "dos"],
// ]);

// const merged = new Map([...first, ...second]);
// console.log(merged);
// console.log(...map);
// const m = new Map([
//   [true, 7],
//   [{ foo: 3 }, ["abc"]],
// ]);
// console.log(m);
function toObject(strMap) {
  let o = Object.create(null);
  // for (let [k, v] of strMap.entries()) {
  //   o[k] = v;
  // }
  console.log(o);
  return o;
}

const m = new Map().set("yes", true).set("no", false);
toObject(m);
// console.log(toObject(m));
