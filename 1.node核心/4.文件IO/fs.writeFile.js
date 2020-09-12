const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./file/test.txt');

async function test(){
    await fs.promises.writeFile(filename,'aaaaaaa',{
        flag:'a'
    });
    console.log("写入成功！");
}

test();