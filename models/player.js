const { DataTypes } = require('sequelize');
const db = require('../config/db'); // Assuming your db connection is set up here

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
            model: 'Teams', // Name of the team table
            key: 'team_id'
        }
    },
    region: {
        type: DataTypes.STRING(3), // Abbreviated region code (e.g., NA, EU)
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Player;
