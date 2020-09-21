/**
 * 测试
 */

// 导入业务逻辑
const AdminServeice = require('./service/AdminService');
const StudentService = require('./service/StudentService');
const ClassService = require('./service/ClassService');
const BookService = require('./service/BookService');

/**
 * 添加管理员用户
 */
// AdminServeice.addAdmin({
//     loginId: 'admin2',
//     loginPwd: '123456',
//     name:'张四'
// }).then(res=>{
//     console.log(res);
// })

/**
 * 修改管理员
 */
// AdminServeice.updateAdmin(2,{
//     loginId:'aaaa'
// }).then(res=>{
//     console.log(res);
// })

/**
 * 删除管理员
 */
AdminServeice.deleteAdmin(2).then(res=>{
    console.log(res);
})