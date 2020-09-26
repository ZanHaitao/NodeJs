require('./init');

const studentServ = require('./service/StudentService');

studentServ.getStudentList().then(r=>{
    console.log(r);
})