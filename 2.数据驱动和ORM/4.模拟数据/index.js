/**
 * 测试
 */

// 同步模型
// require('./models/sync');
// 初始化关系
// require('./models/relation');
// 模拟数据
// require('./mock/mockStudent');

// 导入业务逻辑
// const AdminServeice = require('./service/AdminService');
// const StudentService = require('./service/StudentService');
// const ClassService = require('./service/ClassService');
// const BookService = require('./service/BookService');

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
// AdminServeice.deleteAdmin(2).then(res=>{
//     console.log(res);
// })

// ClassService.addClass({
//     id: 10,
//     className: '前端第 10 期',
//     openDate: '2009-07-23'
// }).then(res => {
//     console.log(res);
// })