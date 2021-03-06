const util = require('./util/util');
const { pathToRegexp } = require('path-to-regexp');
const crypt = require('../util/crypt');
// 接口验证规则
const needTokenApi = [
    {
        method:'GET',
        path:'/api/student'
    },
    {
        method:'GET',
        path:'/api/student/:id'
    },
    {
        method:'POST',
        path:'/api/student'
    },
    {
        method:'PUT',
        path:'/api/student/:id'
    },
    {
        method:'DELETE',
        path:'/api/student/:id'
    },
    {
        method:'GET',
        path:'/api/class'
    },
    {
        method:'GET',
        path:'/api/class/:id'
    },
    {
        method:'POST',
        path:'/api/class'
    },
    {
        method:'PUT',
        path:'/api/class/:id'
    },
    {
        method:'DELETE',
        path:'/api/class/:id'
    },
    {
        method:'GET',
        path:'/api/book'
    },
    {
        method:'GET',
        path:'/api/book/:id'
    },
    {
        method:'POST',
        path:'/api/book'
    },
    {
        method:'PUT',
        path:'/api/book/:id'
    },
    {
        method:'DELETE',
        path:'/api/book/:id'
    },
    {
        method:'GET',
        path:'/api/admin'
    },
    {
        method:'GET',
        path:'/api/admin/:id'
    },
    {
        method:'POST',
        path:'/api/admin'
    },
    {
        method:'PUT',
        path:'/api/admin/:id'
    },
    {
        method:'DELETE',
        path:'/api/admin/:id'
    },
]

module.exports = (req, res, next) => {
    // 验证接口权限
    const validation = needTokenApi.filter(api=>{
        const reg = pathToRegexp(api.path);
        return api.method == req.method && reg.test(req.path);
    });
    if(validation.length == 0){
        next();
        return;
    }

    let token = req.cookies.token;
    if (!token) {
        // 处理 非浏览器端
        token = handleAuthorization(req, res, next);
    }
    if(!token){
        // 认证失败 没有权限
        res.status(403).send(util.sendMsg(403,"请登录后访问！"))
    }
    //认证成功
    req.token = crypt.decrypt(token.toString());
    next();
}

function handleAuthorization(req, res, next) {
    return req.headers['Authorization'];
}