require('./init');
const moment = require('moment');

const StudentService = require('./service/StudentService');
const AdminService = require('./service/AdminService');
const BookService = require('./service/BookService');
const ClassService = require('./service/ClassService');

// BookService.getBookById(30).then(r=>{
//     console.log(r);
// });

// BookService.getBookList(1,10,'云际').then(r=>{
//     console.log(r);
// })

// ClassService.getClassById(11).then(r=>{
//     console.log(r);
// });

// ClassService.getClassList().then(r=>{
//     console.log(r);
// })

// AdminService.login('admin','admin').then(r=>{
//     console.log(r);
// });

// AdminService.getAdminById(2).then(r=>{
//     console.log(r);
// });

// AdminService.getAdminList(2,15).then(r=>{
//     console.log(r);
// })

// StudentService.getStudentById(1).then(r=>{
//     console.log(r);
// });

// StudentService.getStudentList(1,10,"",'').then(r=>{
//     console.log(r);
// })

// StudentService.addStudent({
//     name: '1',
//     birthday: '2020/1/11',
//     sex: true,
//     phone: '12345678910',
//     ClassId: '16',
//     id:'123',
//     asd:'13221'
// }).then(r => {
//     console.log(r);
// }, err => {
//     console.log(err);
// })

// ClassService.addClass({
//     className:'前端',
//     openDate:moment().format('YYYY-MM-DD HH:mm:ss')
// }).then(r=>{
//     console.log(r);
// },err=>{
//     console.log(err);
// })

// BookService.addBook({
//     bookName: '老人与海',
//     imgUrl: 'https://www.baidu.com',
//     author: '海明威',
//     publishDate: moment().format('YYYY-MM-DD HH:mm:ss')
// }).then(r => {
//     console.log(r);
// }, err => {
//     console.log(err);
// });