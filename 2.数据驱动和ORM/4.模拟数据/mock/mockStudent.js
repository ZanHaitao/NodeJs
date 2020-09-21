const mockjs = require('mockjs');
const Mock = require('mockjs');
const Student = require('../models/Student');

const result = Mock.mock({
    'datas|500-700':[{
        'name':'@cname',
        'birthday':'@date',
        'sex|1-2':true,
        'phone':/1\d{10}/,
        'ClassId|1-16':0
    }]
}).datas;

Student.bulkCreate(result)