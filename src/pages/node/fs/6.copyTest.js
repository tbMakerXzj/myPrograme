const fs = require("fs");
const process = require("process");
// // readFileSync
// let data = fs.readFileSync("test.txt", "utf-8");

// fs.writeFileSync("test2.txt", data);

// console.log(process.memoryUsage().rss / 1024 / 1024 + " MB"); // 20.4MB

// createReadStream
const rs = fs.createReadStream("test.txt", "utf-8");

const ws = fs.createWriteStream("test3.txt", "utf-8");
rs.on("data", (chunk) => {
  ws.write(chunk);
});

rs.on("end", function () {
  // eslint-disable-next-line no-console
  console.log(process.memoryUsage().rss / 1024 / 1024 + " MB"); // 20.8M
});
