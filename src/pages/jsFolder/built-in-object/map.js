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
console.log(map);
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
const keys = map.keys();
for (let i = 0; i < map.size; i++) {
  const key = keys.next().value;
  console.log(key);
}
