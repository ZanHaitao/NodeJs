require('./init');
const express = require('express');
// const http = require('http');

const app = express();
const port = 8888;

// 使用方式一：
// const server = http.createServer(app);
// server.listen(port,()=>{
//     console.log(`listen server ${port}`);
// });
// 方式二
app.get('/abc/:id', (req, res) => {
    console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    console.log(req.path);
    console.log(req.headers['host']);

    // res.status(302).location('https://duyi.ke.qq.com').end();
    res.redirect('https://duyi.ke.qq.com').end();

})
app.listen(port, () => {
    console.log(`listen server ${port}`);
})