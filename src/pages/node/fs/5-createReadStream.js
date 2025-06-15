/* eslint-disable no-console */
const fs = require("fs");

const rs = fs.createReadStream("./poet.txt");

rs.on("data", function (chunk) {
  console.log(chunk);
});

rs.on("end", function () {
  console.log("读取结束");
});
