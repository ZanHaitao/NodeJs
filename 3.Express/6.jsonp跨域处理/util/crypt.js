const secret = Buffer.from('x0vove8dx5jpxt6z');
const crypto = require('crypto');
const iv = Buffer.from('nykr2mj1suwllb76');

/**
 * 加密
 * @param {*} str 
 */
exports.encrypt = (str) => {
    const cry = crypto.createCipheriv('aes-128-cbc', secret, iv);
    let result = cry.update(str, 'utf-8', 'hex');
    result += cry.final('hex');
    return result;
}

/**
 * 解密
 * @param {*} str 
 */
exports.decrypt = (str) => {
    const decry = crypto.createDecipheriv('aes-128-cbc', secret, iv);
    let result = decry.update(str, 'hex', 'utf-8');
    result += decry.final('utf-8');
    return result;
}