//导入管理员模型
const Admin = require('../models/Admin');
const {
    Op
} = require("sequelize");

// 管理员初始化  如果没有管理员则自动创建管理员
// ......

/**
 * 添加管理员
 * @param {*} adminObj 管理员对象
 */
exports.addAdmin = async function (adminObj) {
    // 方式1
    // const ins = Admin.build(adminObj);
    // ins.save();

    // 方式2
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
}

/**
 * 删除管理员
 * @param {*} adminId 管理员ID
 */
exports.deleteAdmin = async function (adminId) {
    return await Admin.destroy({
        where: {
            id: adminId
        }
    })
}

/**
 * 修改管理员
 * @param {*} adminId 管理员ID
 * @param {*} adminObj 管理员对象
 */
exports.updateAdmin = async function (adminId, adminObj) {
    return await Admin.update(adminObj, {
        where: {
            id: adminId
        }
    });
}

/**
 * 管理员登陆
 * @param {*} loginId 管理员账号
 * @param {*} loginPwd 管理员密码
 */
exports.login = async function (loginId, loginPwd) {
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    });
    if (result) {
        return result.toJSON();
    }
    return null;
}

/**
 * 通过id获取管理员信息
 * @param {*} id 管理员id
 */
exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

/**
 * 分页获取管理员信息
 * @param {*} page 页面
 * @param {*} limit 显示数据
 * @param {*} name 姓名
 */
exports.getAdminList = async function (page = 1, limit = 10, name = "") {
    const result = await Admin.findAndCountAll({
        where: {
            name: {
                [Op.like]: `%${ name }%`
            }
        },
        offset: (page - 1) * limit,
        limit: +limit
    });
    return {
        count:result.count,
        data:JSON.parse(JSON.stringify(result.rows))
    }
}