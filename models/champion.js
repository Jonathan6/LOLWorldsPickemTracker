const { DataTypes } = require('sequelize');
const db = require('../config/db'); // Assuming your db connection is set up here

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

module.exports = Champion;
