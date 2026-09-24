const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Games = db.define('Games', {
    games_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    red_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'teams_id'
        }
    },
    blue_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'teams_id'
        }
    },
    winner_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Teams',
            key: 'teams_id'
        }
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tournament: {
        type: DataTypes.STRING,
        allowNull: false
    },
    game_length: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    modelName: 'games',
    freezeTableName: true,
    tableName: 'games',
    timestamps: false
});

module.exports = Games;
