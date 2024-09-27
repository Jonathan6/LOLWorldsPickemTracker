const sequelize = require('../config/database');
const Games = require('games');
const Teams = require('teams');
const Players = require('players');
const Champions = require('champions');

// Define associations
Games.belongsTo(Teams, { foreignKey: 'team_1_id', as: 'Team1' });
Games.belongsTo(Teams, { foreignKey: 'team_2_id', as: 'Team2' });
Teams.hasMany(Games, { foreignKey: 'team_1_id' });
Teams.hasMany(Games, { foreignKey: 'team_2_id' });

Players.belongsTo(Teams, { foreignKey: 'team_id' });
Teams.hasMany(Players, { foreignKey: 'team_id' });

Games.hasMany(Champions, { foreignKey: 'game_id' });
Champions.belongsTo(Games, { foreignKey: 'game_id' });

// Export models
module.exports = {
    sequelize,
    Games,
    Teams,
    Players,
    Champions,
};
