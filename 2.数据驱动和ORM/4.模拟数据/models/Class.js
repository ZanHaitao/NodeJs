const {
    DataTypes
} = require('sequelize');
const sequelize = require('./db');
const Student = require('./Student')

module.exports = sequelize.define("Class", {
    className: {
        type: DataTypes.STRING,
        allowNull: false
    },
    openDate:{
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
})
