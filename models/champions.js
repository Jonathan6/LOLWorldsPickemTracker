const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Champions = db.define('Champions', {
    champions_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    champions_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    modelName: 'champions',
    freezeTableName: true,
    tableName: 'champions',
    timestamps: false
});

module.exports = Champions;
