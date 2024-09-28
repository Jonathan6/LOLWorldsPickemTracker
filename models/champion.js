const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Champion = db.define('Champion', {
    champion_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    champion_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    modelName: 'champion',
    freezeTableName: true,
    tableName: 'champion',
    timestamps: false
});

module.exports = Champion;
