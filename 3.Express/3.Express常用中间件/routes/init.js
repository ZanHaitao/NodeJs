const express = require('express');
const path = require('path')
const app = express();

const port = 8888;

app.listen(port, () => {
    console.log(`Listen server ${port}`);
});

const staticRoot = path.resolve(__dirname, '../public');
// 静态资源中间件
app.use(express.static(staticRoot));

//Post中间件 处理:application/x-www-form-urlencoded
// app.use(express.urlencoded({
//     extended: true
// }));

app.use(require('./myUrlencoded'));

app.use(express.json());

app.post('/api/student', (req, res, next) => {
    console.log(req.body);
    next();
})

app.use(require('./errorMiddleware'));

app.use('/news', require('./errorMiddleware'));