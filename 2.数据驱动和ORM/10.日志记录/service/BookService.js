// 导入图书模型
const Book = require('../models/Book');
const Op = require('sequelize').Op;
const validate = require('validate.js');
const pick = require('../util/propertayHelper').pick;

/**
 * 添加图书
 * @param {*} bookObj 图书对象
 */
exports.addBook = async function (bookObj) {
    bookObj = pick(bookObj, 'bookName', 'imgUrl', 'author', 'publishDate');
    const rules = {
        bookName: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            type: 'string',
        },
        imgUrl: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            type: 'string',
        },
        author: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            type: 'string',
        },
        publishDate: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            datetime: {
                dateOnly: false,
            }
        }
    };
    await validate.async(bookObj, rules);
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
    bookObj = pick(bookObj, 'bookName', 'imgUrl', 'author', 'publishDate');
    const rules = {
        bookName: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            type: 'string',
        },
        imgUrl: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            type: 'string',
        },
        author: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            type: 'string',
        },
        publishDate: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            datetime: {
                dateOnly: false,
            }
        }
    };
    await validate.async(bookObj, rules);
    return await Book.update(bookObj, {
        where: {
            id: bookId
        }
    });
}

/**
 * 通过ID获取图书信息
 * @param {*} id 图书id
 */
exports.getBookById = async function (id) {
    const result = await Book.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

/**
 * 分页获取图书列表
 * @param {*} page 页数
 * @param {*} limit 显示数量
 * @param {*} key 关键词
 */
exports.getBookList = async function (page = 1, limit = 10, key = "") {
    const result = await Book.findAndCountAll({
        where: {
            [Op.or]: [{
                bookName: {
                    [Op.like]: `%${key}%`
                }
            }, {
                author: {
                    [Op.like]: `%${key}%`
                }
            }]
        },
        offset: (page - 1) * limit,
        limit: +limit
    });

    return {
        count: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}