const express = require('express');
const { asyncHandler } = require('../util/util');
const bookService = require('../../service/BookService');

const router = express.Router();

/**
 * 分页获取图书
 */
router.get('/', asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const key = req.query.key || "";
    return await bookService.getBookList(page, limit, key);
}));

/**
 * 通过ID获取图书
 */
router.get('/:id', asyncHandler(async (req, res) => {
    return await bookService.getBookById(req.params.id);
}));

/**
 * 添加图书
 */
router.post('/', asyncHandler(async (req, res) => {
    return await bookService.addBook(req.body);
}));

/**
 * 修改图书
 */
router.put('/:id', asyncHandler(async (req, res) => {
    return await bookService.updateBook(req.params.id,req.body);
}));

/**
 * 删除图书
 */
router.delete('/:id', asyncHandler(async (req, res) => {
    return await bookService.deleteBook(req.params.id);
}));

module.exports = router;