const express = require('express');
const adminService = require('../../service/AdminService');
const { asyncHandler } = require('../util/util');

const router = express.Router();

/**
 * 获取所有管理员
 */
router.get('/', asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const name = req.query.name || "";
    return await adminService.getAdminList(page, limit, name);
}));

/**
 * 通过ID获取管理员
 */
router.get('/:id', asyncHandler(async (req, res) => {
    return await adminService.getAdminById(req.params.id);
}));

/**
 * 添加管理员
 */
router.post('/', asyncHandler(async (req, res) => {
    return await adminService.addAdmin(req.body);
}));

/**
 * 修改管理员信息
 */
router.put('/:id', asyncHandler(async (req, res) => {
    return await adminService.updateAdmin(req.params.id, req.body);
}));

/**
 * 通过ID删除管理员
 */
router.delete('/:id', asyncHandler(async (req, res) => {
    return await adminService.deleteAdmin(req.params.id);
}));

module.exports = router;