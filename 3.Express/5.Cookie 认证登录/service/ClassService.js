// 导入班级模型
const Class = require('../models/Class');
const validate = require('validate.js');
const pick = require('../util/propertayHelper').pick;

/**
 * 添加班级
 * @param {*} classObj 班级对象
 */
exports.addClass = async function (classObj) {
    classObj = pick(classObj, 'className', 'openDate');
    const rules = {
        className: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            type: 'string',
        },
        openDate: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            datetime: {
                dateOnly: false,
            }
        }
    };
    await validate.async(classObj, rules);
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
    classObj = pick(classObj, 'className', 'openDate');
    const rules = {
        className: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            type: 'string',
        },
        openDate: {
            presence: {
                //不允许为空
                allowEmpty: false
            },
            datetime: {
                dateOnly: false
            }
        }
    };
    await validate.async(classObj, rules);
    return await Class.update(classObj, {
        where: {
            id: classId
        }
    });
}

/**
 * 通过id获取班级信息
 * @param {*} id 班级id
 */
exports.getClassById = async function (id) {
    const result = await Class.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

/**
 * 获取全部班级信息
 */
exports.getClassList = async function () {
    const result = await Class.findAll();
    if (result) {
        return JSON.parse(JSON.stringify(result));
    }
    return null;
}