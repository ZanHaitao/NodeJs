// 导入学生模型
const Student = require('../models/Student');
const {
    Op
} = require("sequelize");

/**
 * 添加学生
 * @param {*} studentObj 学生对象
 */
exports.addStudent = async function (studentObj) {
    const ins = await Student.create(studentObj);
    return ins.toJSON();
}

/**
 * 删除学生
 * @param {*} studentId 学生ID
 */
exports.deleteStudent = async function (studentId) {
    return await Student.destroy({
        where: {
            id: studentId
        }
    })
}

/**
 * 修改学生
 * @param {*} studentId 学生ID
 * @param {*} studentObj 学生对象
 */
exports.updateStudent = async function (studentId, studentObj) {
    return await Student.update(studentObj, {
        where: {
            id: studentId
        }
    });
}

/**
 * 通过ID获取学生信息
 * @param {*} studentId 学生id
 */
exports.getStudentById = async function (studentId) {
    const result = await Student.findByPk(studentId);
    if (result) {
        return result.toJSON();
    }
    return null;
}

/**
 * 分页获取学生信息
 * @param {*} page 页数
 * @param {*} limit 显示数量
 * @param {*} sex 性别
 * @param {*} name 姓名
 */
exports.getStudentList = async function (page = 1, limit = 10, sex = "", name = "") {
    const where = {};

    if(sex){
        where.sex= !!sex
    }
    if(name){
        where.name = {
            [Op.like]: `%${name}%`
        }
    }
    const result = await Student.findAndCountAll({
        where,
        offset: (page - 1) * limit,
        limit: +limit
    });

    return {
        count: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}