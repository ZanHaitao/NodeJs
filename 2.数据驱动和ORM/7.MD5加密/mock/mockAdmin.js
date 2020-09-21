const Mock = require('mockjs');
const Admin = require('../models/Admin');
const md5 = require('md5');

const result = Mock.mock({
    "datas|20": [{
        loginId: /[a-z]{2}[A-Z]{2}[0-9]/,
        loginPwd: /[a-z]{2}[0-9]{0,5}[A-Z]{2}/,
        name: '@cname'
    }]
}).datas.map((item)=>{
    item.loginPwd = md5(item.loginPwd);
    return item;
});

Admin.bulkCreate(result)