const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./file/test.txt');

async function test(){
    // const result = await fs.promises.readFile(filename,'utf-8');
    const buffer = await fs.promises.readFile(filename);
    const result = buffer.toString('utf-8');
    console.log(result);
}

test();