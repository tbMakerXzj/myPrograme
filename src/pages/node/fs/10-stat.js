/* eslint-disable no-console */
const fs = require("fs");

fs.stat("./data.txt", function (err, stats) {
  if (err) throw err;
  console.log(stats);
  // isFile
  console.log(stats.isFile());
  // isDirectory
  console.log(stats.isDirectory());
});
