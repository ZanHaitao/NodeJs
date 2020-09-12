const http = require('http');
const url = require('url');


function handler(req,res){
    console.log("收到了一个请求");
    console.log("请求头：" , req.headers);
    console.log("请求方式：", req.method);
    console.log("请求地址：", url.parse(req.url));
    req.on('data',chunk=>{
        console.log(chunk.toString("utf-8"));
    });
    res.write("你好！");
    res.end();
};

const server = http.createServer(handler);

server.listen(8888);
server.on("listening",()=>{
    console.log("开启服务成功：端口号为8888");
})