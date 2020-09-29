const express = require('express');
const { asyncHandler } = require('../util/util');
const studentService = require('../../service/StudentService');
const router = express.Router();

/**
 * 分页查询学生
 */
router.get('/', asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sex = req.query.sex || -1;
    const name = req.query.name || "";
    const result = await studentService.getStudentList(page, limit, sex, name);
    const json = JSON.stringify(result);
    const script = `callback(${json})`;
    res.header('content-type','application/javascript').send(script);
}));

/**
 * 通过ID查询学生
 */
router.get('/:id', asyncHandler(async (req, res) => {
    return await studentService.getStudentById(req.params.id);
}))

/**
 * 添加学生
 */
router.post('/', asyncHandler(async (req, res) => {
    return await studentService.addStudent(req.body);
}));

/**
 * 修改学生
 */
router.put('/:id', asyncHandler(async (req, res) => {
    return await studentService.updateStudent(req.params.id, req.body);
}))

/**
 * 通过ID删除学生
 */
router.delete('/:id', asyncHandler(async (req, res) => {
    return await studentService.deleteStudent(req.params.id);
}))

module.exports = router;