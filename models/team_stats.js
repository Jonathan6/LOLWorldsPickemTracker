const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Team_Stats = db.define('Team_Stats', {
    team_stats_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    games_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Games',
            key: 'games_id'
        }
    },
    teams_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'teams_id'
        }
    },
    dragons: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    barons: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    grubs: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    towers: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    modelName: 'team_stats',
    freezeTableName: true,
    tableName: 'team_stats',
    timestamps: false
});

module.exports = Team_Stats;
