/**
 * 过滤指定对象数据
 * @param {*} obj 
 * @param  {...any} args 
 */
exports.pick = function (obj, ...args) {
    const newObj = {};
    for (const key of args) {
        if(!newObj[key] && obj[key] != undefined){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}