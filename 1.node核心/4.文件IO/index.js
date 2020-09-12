const fs = require('fs');
const path = require('path');
const { Z_FULL_FLUSH } = require('zlib');

const filename = path.resolve(__dirname,'./file/');

class FileItem{
    constructor(stat){
        this.name = stat.name;
        this.ext = stat.ext;
        this.isFile = stat.isFile;
        this.size = stat.size;
        this.createTime = stat.createTime;
        this.updateTime = stat.updateTime;
        this.path = stat.path;
    }

    async getChildren(){
        if(this.isFile){
            return [];
        }else{
            return await test(this.path+'/');
        }
    }

    async getContent(isBuffer = false){
        if(this.isFile){
            if(isBuffer){
                return await fs.promises.readFile(this.path);
            }else{
                return await fs.promises.readFile(this.path,'utf-8');
            }
        }else{
            return null;
        }
    }
}

async function test(filename){
    const result = await fs.promises.readdir(filename);

    const fileObj = {};


    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        
        const toFilename = path.resolve(filename,item);
        const fileStat = await fs.promises.stat(toFilename);
        const obj = {
            path:toFilename,
            isFile: fileStat.isFile(),
            size:fileStat.size,
            createTime:new Date(fileStat.birthtime).toLocaleDateString(),
            updateTime:new Date(fileStat.mtime).toLocaleDateString()
        }

        if(fileStat.isFile()){
            const index = item.lastIndexOf('.')
            obj.name = item.substring(0,index);
            obj.ext = item.substring(index);
        }else{
            obj.name = item;
            obj.ext = null;
        }
        
        fileObj[obj.name] = new FileItem(obj);
    }



    return fileObj;
}

test(filename).then(res=>{
    return res['test'].getContent();
}).then(res=>{
    console.log(res);
});
