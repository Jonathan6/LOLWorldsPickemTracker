const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Team = db.define('Team', {
    team_id: {
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
        type: DataTypes.STRING(3), // Abbreviated region code (e.g., NA, EU)
        allowNull: false
    }
}, {
    modelName: 'team',
    freezeTableName: true,
    tableName: 'team',
    timestamps: false
});

module.exports = Team;
