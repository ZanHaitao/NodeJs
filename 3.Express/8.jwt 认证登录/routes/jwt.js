const jwt = require('jsonwebtoken');
const cookieKey = 'token';
// jwt密钥
const secret = 'aDcCLxa';

/**
 * 颁布jwt
 */
exports.publish = (res, maxAge = 3600 * 24, options = {}) => {
    const token = jwt.sign(options, secret, {
        expiresIn: maxAge
    })
    // 添加cookie
    res.cookie(cookieKey, token, {
        maxAge,
        path: '/'
    })
    // 添加 Authorization
    res.header('Authorization', token);
}

/**
 * 验证jwt
 */
exports.verify = (req) => {
    let token = req.cookies.token;
    if(!token){
        token = req.headers.authorization;
        if(!token){
            //没有token
            return null;
        }
        token = token.split(" ");
        token = token.length === 1 ? token[0] : token[1];
    }
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}