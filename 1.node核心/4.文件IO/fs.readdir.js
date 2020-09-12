const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./file/');

async function test(){
    const result = await fs.promises.readdir(filename);
    console.log(result);
}
test();