/* eslint-disable @typescript-eslint/no-unused-vars */
// alloc
let buf_1 = Buffer.alloc(10);
// console.log(buf_1);

// allocUnsafe
let buf_2 = Buffer.allocUnsafe(1000);
// console.log(buf_2);

// from
let buf_3 = Buffer.from([123, 456, 789]);
// console.log(buf_3);

// buffer与字符串之间的转换
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf_4.toString());

// []
// let buf_5 = Buffer.from("hello world");
// console.log(buf_5[0].toString(2)); //01101000
// buf_5[0] = 95;
// console.log(buf_5.toString()); //_ello world

// 溢出
let buf_6 = Buffer.from("hello");
// buf_6[0] = 300;
// console.log(buf_6); //�llo 000101101001

// 中文
let buf_7 = Buffer.from("你好");
// console.log(buf_7); // <Buffer e4 bd a0 e5 a5 bd>
