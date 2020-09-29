const express = require('express');
const classServie = require('../../service/ClassService');
const { asyncHandler } =require('../util/util');

const router = express.Router();

/**
 * 获取所有班级
 */
router.get('/',asyncHandler(async (req,res)=>{
    return await classServie.getClassList();
}));

/**
 * 通过ID获取班级信息
 */
router.get('/:id',asyncHandler(async (req,res)=>{
    return await classServie.getClassById(req.params.id);
}));

/**
 * 添加班级
 */
router.post('/',asyncHandler(async (req,res)=>{
    return await classServie.addClass(req.body);
}));

/**
 * 修改班级信息
 */
router.put('/:id',asyncHandler(async (req,res)=>{
    return await classServie.updateClass(req.params.id,req.body);
}));

/**
 * 通过ID删除班级
 */
router.delete('/:id',asyncHandler(async (req,res)=>{
    return await classServie.deleteClass(req.params.id);
}));

module.exports = router;