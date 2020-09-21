const {
    DataTypes
} = require('sequelize');
const sequelize = require('./db');
const Student = require('./Student')

const Class = sequelize.define("Class", {
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

Class.hasMany(Student);

module.exports = Class;