const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Teams = db.define('Teams', {
    teams_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    team_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    region: {
        type: DataTypes.STRING(10), // Abbreviated region code (e.g., NA, EU)
        allowNull: false
    }
}, {
    modelName: 'teams',
    freezeTableName: true,
    tableName: 'teams',
    timestamps: false
});

module.exports = Teams;
