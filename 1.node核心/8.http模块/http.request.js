const http = require("http");

const request = http.request("http://duyi.ke.qq.com",{
    method: 'GET'
}, resp => {
    console.log(resp.headers);
    resp.on('data',chunk=>{
        console.log(chunk.toString('utf-8'));
    })
})

request.end();


