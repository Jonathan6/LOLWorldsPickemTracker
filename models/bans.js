const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Bans = db.define('Bans', {
    bans_id: {
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
    champions_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champions',
            key: 'champions_id'
        }
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    modelName: 'bans',
    freezeTableName: true,
    tableName: 'bans',
    timestamps: false
});

module.exports = Bans;
