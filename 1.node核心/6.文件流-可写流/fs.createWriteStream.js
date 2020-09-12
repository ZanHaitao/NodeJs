const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './temp/abc.txt');

const ws = fs.createWriteStream(filename, {
    encoding: "utf-8",
    highWaterMark: 3,
    flags: "a"
});

let i = 0;

function test() {
    let flag = true;
    while (i < 1024 * 1024 * 10 && flag) {
        flag = ws.write("a");
        i++;
    }
}
test();
ws.on('drain', () => {
    test();
})