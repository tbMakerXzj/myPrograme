const ejs = require("ejs");
const fs = require("fs");

let china = "中国";

let date = new Date().toLocaleString();

let str = fs.readFileSync("./2_ejs.html").toString();

let result = ejs.render(str, { china, date });

// eslint-disable-next-line no-console
console.log(111, result);
