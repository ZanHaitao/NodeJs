const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './test.txt');

const rs = fs.createReadStream(filename, {
    encoding: 'utf-8',
    highWaterMark: 1,
    autoClose: true
});

rs.on("open", () => {
    console.log("文件打开了");
});

rs.on("error", () => {
    console.log("文件出错了");
});

rs.on("close", () => {
    console.log("文件关闭了");
});

rs.on("data", chunk => {
    console.log("文件读取成功 " + chunk);
    rs.pause();
});

rs.on("end", () => {
    console.log("文件读取完毕");
});

rs.on("pause", () => {
    console.log("读取暂停");
    setTimeout(() => {
        rs.resume()
    }, 1000);
});

rs.on("resume", () => {
    console.log("读取继续");
});