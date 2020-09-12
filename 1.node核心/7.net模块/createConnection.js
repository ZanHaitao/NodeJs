const net = require('net');
const path = require('path');
const fs = require('fs');

const socket = net.createConnection({
    host: 'duyi.ke.qq.com',
    port: 80
}, () => {
    console.log("连接成功");
});

let receive;

function parseResponse(response) {
    const index = response.indexOf('\r\n\r\n');
    const headerStr = response.substring(0, index);
    const body = response.substring(index + 1);
    const header = headerStr.split('\r\n').slice(1).map(str => {
        return str.split(':').map(item => {
            return item.trim();
        });
    }).reduce((a, b) => {
        a[b[0]] = b[1];
        return a;
    }, {});
    return {
        header,
        body
    }
}

function isOver() {
    return receive.header['Content-Length'] <= Buffer.from(receive.body, "utf-8").byteLength;
}

socket.on("data", chunk => {
    if (!receive) {
        receive = parseResponse(chunk.toString("utf-8"));
    }else{
        receive.body += chunk.toString("utf-8");
        if (isOver()) {
            console.log(receive);
        }
    }
    
});


socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com
Connection: keep-alive

`);