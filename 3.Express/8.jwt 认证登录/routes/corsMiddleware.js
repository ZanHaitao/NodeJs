const originList = [
    "http://127.0.0.1:5500",
    "null"
]

module.exports = (req, res, next) => {
    // 预检请求
    if(req.method === 'OPTIONS'){
        res.header('access-control-allow-method',req.headers['access-control-request-method']);
        res.header('access-control-allow-headers',req.headers['access-control-request-headers']);
    }

    // 简单请求
    if('origin' in req.headers && originList.includes(req.headers.origin)){
        res.header('access-control-allow-origin',req.headers.origin);
        res.header('Access-Control-Allow-Credentials',true);
    }
    next();
}