const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./file/1');

async function exists(){
    try{
        await fs.promises.stat(filename);
        return true;
    }catch(err){
        if(err.code === "ENOENT"){
            return false;
        }
        throw err;
    }
}

async function test(){
    const result = await exists();
    if(result){
        console.log("已存在，无需操作");
    }else{
        await fs.promises.mkdir(filename);
        console.log("创建成功！");
    }
}
test();