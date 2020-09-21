// 导入学生模型
const Student = require('../models/Student');

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