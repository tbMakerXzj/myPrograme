/* eslint-disable no-console */
const fs = require("fs");

// 异步写入
fs.writeFile("./test.txt", "hello world", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("写入成功");
  }
});

// 同步写入
// try {
//   fs.writeFileSync("./data.txt", "同步写入文件", { encoding: "utf8" });
//   console.log("同步写入成功");
// } catch (error) {
//   console.log(error);
// }
console.log(1111);
