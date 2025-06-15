/* eslint-disable no-console */
const fs = require("fs");

// fs.unlink("../test5.txt", function (err) {
//   if (err) throw err;
//   console.log("文件已删除");
// });

fs.rm("test3.txt", function (err) {
  if (err) throw err;
  console.log("文件已删除");
});
