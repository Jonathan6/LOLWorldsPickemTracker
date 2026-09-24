const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Player_Stats = db.define('Player_Stats', {
    player_stats_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    players_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Players',
            key: 'players_id'
        }
    },
    games_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Games',
            key: 'games_id'
        }
    },
    champions_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champions',
            key: 'champions_id'
        }
    },
    kills: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deaths: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    assists: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    creep_score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    modelName: 'player_stats',
    freezeTableName: true,
    tableName: 'player_stats',
    timestamps: false
});

module.exports = Player_Stats;
