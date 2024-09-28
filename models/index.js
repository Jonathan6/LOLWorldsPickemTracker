const sequelize = require('../config/db');

// const Player = require('./player');
const Team = require('./team');
// const Game = require('./game');
// const Champion = require('./champion');

// Define associations
// Game.belongsTo(Team, { foreignKey: 'team_1_id', as: 'Team1' });
// Game.belongsTo(Team, { foreignKey: 'team_2_id', as: 'Team2' });
// Team.hasMany(Game, { foreignKey: 'team_1_id' });
// Team.hasMany(Game, { foreignKey: 'team_2_id' });

// Player.belongsTo(Team, { foreignKey: 'team_id' });
// Team.hasMany(Player, { foreignKey: 'team_id' });

// Game.hasMany(Champion, { foreignKey: 'game_id' });
// Champion.belongsTo(Game, { foreignKey: 'game_id' });

// Export models
module.exports = {
    sequelize,
    Team
};

// Game,
//     Team,
//     Player,
//     Champion,