const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Player = db.define('Player', {
    player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    player_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Team',
            key: 'team_id'
        }
    },
    role: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = Player;
