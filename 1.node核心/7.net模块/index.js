const net = require('net');
const path = require('path');
const fs = require('fs');

const serve = net.createServer();

serve.listen(1234);

serve.on('listening', () => {
    console.log("连接成功");
})

serve.on('connection', socket => {
    console.log("客户端连接成功");
    socket.on('data', chunk => {
        console.log(chunk.toString('utf-8'));
    });
    socket.write(`HTTP/1.1 200 OK

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>你好呀</h1>
</body>
</html>
`)
    socket.end();

    socket.on('end', () => {
        console.log("连接关闭了");
    })
})