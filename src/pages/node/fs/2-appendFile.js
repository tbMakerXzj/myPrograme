// const fs = require("fs");

// 异步写入
// fs.appendFile("./test.txt", " not hello", { encoding: "utf8" }, function (err) {
//   if (err) throw err;
//   console.log("异步写入");
// });

// 同步写入
// try {
//   fs.appendFileSync("./test.txt", " \t\r11not hello", { encoding: "utf8" });
//   console.log("写入成功");
// } catch (error) {
//   console.log(error);
// }

// 追加写入
// fs.writeFile("./test.txt", "\r追加写入", { flag: "a" }, function (err) {
//   if (err) throw err;
//   console.log("追加写入");
// });
