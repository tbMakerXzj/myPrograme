/* eslint-disable no-console */
const express = require("express");

const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();

app.use(
  session({
    name: "sid", //设置cookie的name，默认值是：connect.sid
    secret: "xuzijun", //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/aaaa", //数据库的连接配置
    }),
    cookie: {
      httpOnly: true, // 开启后前端无法通过 JS 操作
      maxAge: 1000 * 60 * 5, // 这一条 是控制 sessionID 的过期时间的！！！
    },
  })
);

app.get("/login", (req, res) => {
  //设置session
  const { username, password } = req.query;

  if (username && password) {
    req.session.username = username;
    req.session.email = password;
    res.send("登录成功");
  } else {
    res.send("登录失败");
  }
});

app.get("/home", (req, res) => {
  if (req.session.username) {
    res.send(`你好 ${req.session.username}`);
  } else {
    res.send("登录 注册");
  }
});

app.get("/logout", (req, res) => {
  //销毁session
  // res.send('设置session');
  req.session.destroy(() => {
    res.send("成功退出");
  });
});

app.listen(3000, () => {
  console.log("服务已经启动, 端口 " + 3000 + " 监听中...");
});
