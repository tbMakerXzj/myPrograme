const fs = require("fs");

// fs.rename("test.txt", "test4.txt", function (err) {
//   if (err) throw err;
//   console.log("File renamed!");
// });

// 移动文件
// fs.rename("test4.txt", "../test5.txt", function (err) {
//   if (err) throw err;
//   console.log("File moved!");
// });

fs.renameSync("test2.txt", "test.txt");
