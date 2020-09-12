const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./file/1.jpg');

async function test(){
    const buffer = await fs.promises.readFile(filename);
    const toFilename = path.resolve(__dirname,'./file/1.copy.jpg');
    await fs.promises.writeFile(toFilename,buffer);
    console.log('复制成功');
}
test();