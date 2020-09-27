const express = require('express');

const app = express();

const port = 8888;

app.listen(port, () => {
    console.log(`Listen server ${port}`);
});

app.get('/news',
    (req, res, next) => {
        console.log('header1');
        next(new Error('123'));
        next();
    },
    (req, res, next) => {
        console.log('header2');
        next();
    }
);

app.use('/news',require('./errorMiddleware'));