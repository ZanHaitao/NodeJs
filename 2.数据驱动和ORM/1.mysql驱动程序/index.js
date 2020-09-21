const mysql2 = require("mysql2/promise");

const pool = mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'15556677737',
    database:'test'
});

async function test(id){
    const sql = "select * from company where id=?";
    const [result] = await pool.execute(sql,[id]);
    console.log(result);
}

test(1);