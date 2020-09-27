const express = require('express');
const path = require('path')
const app = express();

const port = 8888;

app.listen(port, () => {
    console.log(`Listen server ${port}`);
});

// 处理静态资源中间件
const staticRoot = path.resolve(__dirname, '../public');
app.use(express.static(staticRoot));

// 解析 application/x-www-form-urlencoded 请求体
app.use(express.urlencoded({
    extended: true
}));

// 解析 application/json 请求体
app.use(express.json());

// api处理
app.use('/api/student',require('./api/studentRouter'));
app.use('/api/book',require('./api/bookRouter'));
app.use('/api/class',require('./api/classRouter'));
app.use('/api/admin',require('./api/adminRouter'));

// 处理报错中间件
app.use(require('./errorMiddleware'));

app.use('/news', require('./errorMiddleware'));