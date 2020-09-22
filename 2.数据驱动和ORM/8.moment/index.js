const moment = require("moment");
moment.locale('zh-cn');

const format = [
    "YYYY-MM-DD HH:mm:ss",
    "YYYY/MM/DD HH:mm:ss",
    "YYYY-M-D H:m:s",
    "YYYY/M-D H:m:s",
    "x"
];

const time = "2020-02-02 00:00:00";

const m = moment.utc(time, format, true);
console.log(m.local().format("YYYY年MM月DD年 HH时mm分ss秒"));

const t = moment(time, format, true);
console.log(t.utc().format("YYYY年MM月DD年 HH时mm分ss秒"));

console.log(m.local().fromNow());