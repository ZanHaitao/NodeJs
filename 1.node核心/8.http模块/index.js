const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

/**
 * 获取文件stat
 * @param {*} filename 
 */
async function getFileStat(filename) {
    try {
        return await fs.promises.stat(filename);
    } catch {
        return null;
    }
}
/**
 * 获取文件内容
 * @param {*} url 
 */
async function getFileContent(url) {
    let filename;
    filename = path.resolve(__dirname, 'public', url.pathname.substr(1));
    let stat = await getFileStat(filename);
    if (!stat) {
        return null;
    } else if (stat.isDirectory()) {
        filename = path.resolve(__dirname, 'public', url.pathname.substr(1), 'index.html');
        stat = await getFileStat(filename);
        if (!stat) {
            return null;
        }
        return await fs.promises.readFile(filename);
    } else {
        return await fs.promises.readFile(filename);
    }
}

/**
 * 处理函数
 * @param {*} req 
 * @param {*} res 
 */
async function handler(req, res) {
    console.log(url.parse(req.url));
    const fileContent = await getFileContent(url.parse(req.url));
    if(!fileContent){
        res.write("Request not Found!");
    }else{
        res.write(fileContent);
    };
    res.end();
}

const server = http.createServer(handler);

server.listen(8888);

server.on('listening', () => {
    console.log("开启服务成功！");
});