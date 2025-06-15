/* eslint-disable no-console */
const express = require("express");

const app = express();

const { singers } = require("./singers.json");

app.get("/home", (req, res) => {
  // 获取参数
  console.log(req.method);
  console.log(req.url);
  console.log(req.query);
  console.log(req.params);
  console.log(req.ip);

  res.send("Hello World1");
});

// app.get("/:id", (req, res) => {
//   console.log(req.params?.id);
//   res.send("params id send");
// });

app.get("/singer/:id", (req, res) => {
  console.log(req.params?.id);
  const id = req.params.id;
  let result = singers.find((singer) => {
    if (singer.id == Number(id)) {
      return true;
    }
  });

  if (!result) {
    res.statusCode = 404;
    res.send("<h2>404 Not Found</h2>");
    return;
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>

    <body>
    <h2>${result.singer_name}</h2>
    <img src="${result.singer_pic}" alt="">
    <h3>${result.other_name}</h3>
    </body>

    </html>
    `);
});

app.get("/response", (req, res) => {
  res.status(500);
  res.set("aaaa", "bbbb");
  res.set("cccc", "11111");
  res.send("response send");
});

app.get("/other", (req, res) => {
  // 跳转
  // res.redirect("https://www.baidu.com");
  // 下载
  // res.download(__dirname + "/singers.json");
  // JSON
  // res.json({
  //   name: "xzj",
  //   content: "nb",
  // });
  // 响应文件内容
  res.sendFile(__dirname + "/1.html");
  // res.send("111");
});

app.get("/", (req, res) => {
  res.send("home");
});

app.post("/login", (req, res) => {
  res.send("login123");
});

app.all("/test", (req, res) => {
  res.end("test");
});

app.listen(3000, () => {
  console.log("3000 running...");
});
