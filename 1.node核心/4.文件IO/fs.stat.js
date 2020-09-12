const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./file/1.jpg');

async function test(){
    const stat = await fs.promises.stat(filename);
    console.log(stat);
    console.log("是否为目录：",stat.isDirectory());
    console.log("是否为文件：",stat.isFile());
}
test();