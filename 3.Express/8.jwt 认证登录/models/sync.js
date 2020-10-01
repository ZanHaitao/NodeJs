require('./Admin');
require('./Book');
require('./Class');
require('./Student');
const sequelize = require('./db');

sequelize.sync({alter:true}).then(()=>{
    console.log("模型同步成功");
})