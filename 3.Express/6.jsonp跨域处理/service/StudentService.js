// 导入学生模型
const Student = require('../models/Student');
const Class = require('../models/Class');
const Op = require("sequelize").Op;
const validate = require('validate.js');
const moment = require('moment');
const pick = require('../util/propertayHelper').pick;

/**
 * 添加学生
 * @param {*} studentObj 学生对象
 */
exports.addStudent = async function(studentObj) {
    studentObj = pick(studentObj, 'name', 'birthday', 'sex', 'phone', 'ClassId')
    const rules = {
        name: {
            //必填项
            presence: {
                //不允许为空
                allowEmpty: false
            },
            // 类型
            type: "string",
            // 字符串长度
            length: {
                minimum: 1,
                maximum: 10
            }
        },
        birthday: {
            presence: {
                allowEmpty: false
            },
            // 日期控制
            datetime: {
                dateOnly: true,
                earliest: moment.utc().subtract(100, 'y'),
                latest: moment.utc()
            }
        },
        sex: {
            presence: true,
            type: 'boolean',
        },
        phone: {
            presence: {
                allowEmpty: false
            },
            format: /1\d{10}/,
        },
        ClassId: {
            presence: {
                allowEmpty: false
            },
            classExits: true
        }
    };

    await validate.async(studentObj, rules);
    const ins = await Student.create(studentObj);
    return ins.toJSON();
}

/**
 * 删除学生
 * @param {*} studentId 学生ID
 */
exports.deleteStudent = async function(studentId) {
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
exports.updateStudent = async function(studentId, studentObj) {
    studentObj = pick(studentObj, 'name', 'birthday', 'sex', 'phone', 'ClassId');
    const rules = {
        name: {
            //必填项
            presence: {
                //不允许为空
                allowEmpty: false
            },
            // 类型
            type: "string",
            // 字符串长度
            length: {
                minimum: 1,
                maximum: 10
            }
        },
        birthday: {
            presence: {
                allowEmpty: false
            },
            // 日期控制
            datetime: {
                dateOnly: true,
                earliest: moment.utc().subtract(100, 'y'),
                latest: moment.utc()
            }
        },
        sex: {
            presence: true,
            type: 'boolean',
        },
        phone: {
            presence: {
                allowEmpty: false
            },
            format: /1\d{10}/,
        },
        ClassId: {
            presence: {
                allowEmpty: false
            },
            classExits: true
        }
    };

    await validate.async(studentObj, rules);
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
exports.getStudentById = async function(studentId) {
    let result = await Student.findByPk(studentId, {
        include: Class
    });
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
exports.getStudentList = async function(page = 1, limit = 10, sex = "", name = "") {
    const where = {};

    if (sex != -1 && sex == 1 || sex == 0) {
        where.sex = sex
    }

    if (name) {
        where.name = {
            [Op.like]: `%${name}%`
        }
    }
    const result = await Student.findAndCountAll({
        where,
        offset: (page - 1) * limit,
        limit: +limit,
        include: Class
    });

    return {
        count: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}