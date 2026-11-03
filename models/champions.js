const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Champions = db.define('Champions', {
    champions_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    class: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    modelName: 'champions',
    freezeTableName: true,
    tableName: 'champions',
    timestamps: false
});

module.exports = Champions;
