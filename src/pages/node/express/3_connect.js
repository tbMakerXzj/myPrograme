/* eslint-disable no-console */
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/aaaa");

mongoose.connection.once("open", () => {
  const bookSchema = new mongoose.Schema({
    name: {
      type: String,
      default: "默认书名",
      unique: true,
    },
    price: Number,
    gender: {
      type: String,
      enum: ["男", "女"], //设置的值必须是数组中的
      required: true,
    },
  });
  const bookModel = mongoose.model("books", bookSchema);

  bookModel
    .create({
      name: "JavaScript 权威指南",
      price: 100,
      gender: "男",
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("数据库连接成功");
});

mongoose.connection.on("error", () => {
  console.log("数据库连接失败");
});

mongoose.connection.on("close", () => {
  console.log("数据库断开连接");
});
