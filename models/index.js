const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Player = require('./player')(sequelize, DataTypes);
const Team = require('./team')(sequelize, DataTypes);
const Game = require('./game')(sequelize, DataTypes);
const Champion = require('./champion')(sequelize, DataTypes);

// Define associations
Game.belongsTo(Team, { foreignKey: 'team_1_id', as: 'Team1' });
Game.belongsTo(Team, { foreignKey: 'team_2_id', as: 'Team2' });
Team.hasMany(Game, { foreignKey: 'team_1_id' });
Team.hasMany(Game, { foreignKey: 'team_2_id' });

Player.belongsTo(Team, { foreignKey: 'team_id' });
Team.hasMany(Player, { foreignKey: 'team_id' });

Game.hasMany(Champion, { foreignKey: 'game_id' });
Champion.belongsTo(Game, { foreignKey: 'game_id' });

// Export models
module.exports = {
    Game,
    Team,
    Player,
    Champion,
};
