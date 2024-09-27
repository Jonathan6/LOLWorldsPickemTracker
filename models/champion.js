const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Champions = db.define('Champions', {
    champion_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    champion_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    roles_played: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: false,
        comment: '5-bit value representing roles played: top, jungle, mid, adc, support'
    }
}, {
    timestamps: false
});

module.exports = Champions;
