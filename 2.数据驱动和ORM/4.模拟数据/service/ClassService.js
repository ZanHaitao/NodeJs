// 导入班级模型
const Class = require('../models/Class');

/**
 * 添加班级
 * @param {*} classObj 班级对象
 */
exports.addClass = async function (classObj) {
    const ins = await Class.create(classObj);
    return ins.toJSON();
}

/**
 * 删除班级
 * @param {*} classId 班级ID
 */
exports.deleteClass = async function (classId) {
    return await Class.destroy({
        where: {
            id: classId
        }
    })
}

/**
 * 修改班级
 * @param {*} classId 班级ID
 * @param {*} classObj 班级对象
 */
exports.updateClass = async function (classId, classObj) {
    return await Class.update(classObj, {
        where: {
            id: classId
        }
    });
}