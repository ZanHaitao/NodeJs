const {
    DataTypes
} = require('sequelize');
const sequelize = require('./db');

module.exports = sequelize.define("Book", {
    bookName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true
})