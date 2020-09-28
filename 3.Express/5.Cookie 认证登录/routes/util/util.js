/**
 * 处理响应结果
 * @param {*} code 状态码
 * @param {*} msg 提示信息
 * @param {*} data 数据
 */
exports.sendMsg = (code = 200, msg = "success", data = null) => {
    return {
        code,
        msg,
        data
    }
}

/**
 * 处理异步函数
 * @param {*} handler 处理函数
 */
exports.asyncHandler = (handler) => {
    return async (req, res, next) => {
        try {
            const result = await handler(req, res, next);
            res.send(exports.sendMsg(200, "success", result))
        } catch (err) {
            next(err)
        }
    }
}