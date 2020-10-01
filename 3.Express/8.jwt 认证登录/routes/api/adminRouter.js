const express = require('express');
const adminService = require('../../service/AdminService');
const { asyncHandler, sendMsg } = require('../util/util');
const crypt = require('../../util/crypt');
const jwt = require('../jwt');

const router = express.Router();

/**
 * 管理员登录
 */
router.post('/login', asyncHandler(async (req, res) => {
    const result = await adminService.login(req.body.loginId, req.body.loginPwd);
    if (result) {
        const value = result.id
        // 向客户端分发jwt
        jwt.publish(res,undefined, {
            id: value.toString()
        });
    }
    return result;
}));

/**
 * 获取所有管理员
 */
router.get('/', asyncHandler(async (req, res) => {
    // 检测权限
    const result = await adminService.getAdminById(req.token);
    if (result) {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const name = req.query.name || "";
        return await adminService.getAdminList(page, limit, name);
    } else {
        res.status(403).send(sendMsg(403, "无权限查询管理员"))
    }
}));

/**
 * 通过ID获取管理员
 */
router.get('/:id', asyncHandler(async (req, res) => {
    const result = await adminService.getAdminById(req.token);
    if (result) {
        return await adminService.getAdminById(req.params.id);
    } else {
        res.status(403).send(sendMsg(403, "无权限查询管理员"))
    }
}));

/**
 * 添加管理员
 */
router.post('/', asyncHandler(async (req, res) => {
    const result = await adminService.getAdminById(req.token);
    if (result) {
        return await adminService.addAdmin(req.body);
    } else {
        res.status(403).send(sendMsg(403, "无权限添加管理员"))
    }
}));

/**
 * 修改管理员信息
 */
router.put('/:id', asyncHandler(async (req, res) => {
    const result = await adminService.getAdminById(req.token);
    if (result) {
        return await adminService.updateAdmin(req.params.id, req.body);
    } else {
        res.status(403).send(sendMsg(403, "无权限修改管理员"))
    }
}));

/**
 * 通过ID删除管理员
 */
router.delete('/:id', asyncHandler(async (req, res) => {
    const result = await adminService.getAdminById(req.token);
    if (result) {
        return await adminService.deleteAdmin(req.params.id);
    } else {
        res.status(403).send(sendMsg(403, "无权限删除管理员"))
    }
}));

module.exports = router;