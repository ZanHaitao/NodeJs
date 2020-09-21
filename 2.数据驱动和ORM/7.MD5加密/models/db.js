const { Sequelize } = require("sequelize");

module.exports = new Sequelize('myschooldb','root','15556677737',{
    host:'localhost',
    logging:null,
    dialect:'mysql'
})
