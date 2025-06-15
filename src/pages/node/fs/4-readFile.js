/* eslint-disable no-console */
const fs = require("fs");

// 异步读取
// fs.readFile("./poet.txt", { encoding: "utf8" }, function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

// 同步读取
try {
  const data = fs.readFileSync("./poet.txt", { encoding: "utf8" });
  console.log(data);
} catch (err) {
  console.log(err);
}
