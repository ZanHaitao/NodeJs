//导入管理员模型
const Admin = require('../models/Admin');

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