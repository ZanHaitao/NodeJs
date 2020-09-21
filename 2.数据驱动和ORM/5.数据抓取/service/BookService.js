// 导入图书模型
const Book = require('../models/Book');

/**
 * 添加图书
 * @param {*} bookObj 图书对象
 */
exports.addBook = async function (bookObj) {
    const ins = await Book.create(bookObj);
    return ins.toJSON();
}

/**
 * 删除图书
 * @param {*} bookId 图书ID
 */
exports.deleteBook = async function (bookId) {
    return await Book.destroy({
        where: {
            id: bookId
        }
    })
}

/**
 * 修改图书
 * @param {*} bookId 图书ID
 * @param {*} bookObj 图书对象
 */
exports.updateBook = async function (bookId, bookObj) {
    return await Book.update(bookObj, {
        where: {
            id: bookId
        }
    });
}