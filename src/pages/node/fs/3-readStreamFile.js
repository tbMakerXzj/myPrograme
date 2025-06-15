const fs = require("fs");

const ws = fs.createWriteStream("./poet.txt");

ws.write("锄禾日当午,\r\n");
ws.write("汗滴禾下土。\r\n");
ws.write("谁知盘中餐,\r\n");
ws.write("粒粒皆辛苦。\r\n");

ws.end();
