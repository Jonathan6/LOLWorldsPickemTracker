const sequelize = require('../config/db');

const Team = require('./team');
const Player = require('./player');
const Champion = require('./champion');
const Game = require('./game');

Team.hasMany(Player, { foreignKey: 'team_id' });
Player.belongsTo(Team, { foreignKey: 'team_id' });

Game.hasMany(Champion, { foreignKey: 'game_id' });
Champion.belongsTo(Game, { foreignKey: 'game_id' });

Team.hasMany(Game, { foreignKey: 'team_1_id' });
Game.belongsTo(Team, { foreignKey: 'team_1_id'});
Team.hasMany(Game, { foreignKey: 'team_2_id' });
Game.belongsTo(Team, { foreignKey: 'team_2_id'});

// Export models
module.exports = {
    sequelize,
    Team,
    Player,
    Champion,
    Game
};
