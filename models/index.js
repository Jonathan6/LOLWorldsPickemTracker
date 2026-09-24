const sequelize = require('../config/db');

const Bans = require('./bans');
const Champions = require('./champions');
const Games = require('./games');
const Picks = require('./picks');
const Player_Stats = require('./player_stats');
const Players = require('./players');
const Team_Stats = require('./team_stats');
const Teams = require('./teams');

// Teams
Teams.hasMany(Players, { foreignKey: 'teams_id' });
Players.belongsTo(Teams, { foreignKey: 'teams_id' });


Games.hasMany(Champions, { foreignKey: 'games_id' });
Champions.belongsTo(Games, { foreignKey: 'games_id' });

Teams.hasMany(Games, { foreignKey: 'red_team_id' });
Games.belongsTo(Teams, { foreignKey: 'red_team_id'});
Teams.hasMany(Games, { foreignKey: 'blue_team_id' });
Games.belongsTo(Teams, { foreignKey: 'blue_team_id'});
Teams.hasMany(Games, { foreignKey: 'winner_team_id' });
Games.belongsTo(Teams, { foreignKey: 'winner_team_id'});

// Export models
module.exports = {
    sequelize,
    Teams: Teams,
    Team_Stats: Team_Stats,
    Players: Players,
    Player_Stats: Player_Stats,
    Champions: Champions,
    Games: Games,
    Bans: Bans,
    Picks: Picks
};
