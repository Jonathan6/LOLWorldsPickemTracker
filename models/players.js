const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Players = db.define('Players', {
    players_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'teams_id'
        }
    },
    ign: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_sub: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    modelName: 'players',
    freezeTableName: true,
    tableName: 'players',
    timestamps: false,
});

module.exports = Players;
