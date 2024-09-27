const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Players = require('../models/players')(sequelize, DataTypes);
const Teams = require('../models/teams')(sequelize, DataTypes);
const Games = require('../models/games')(sequelize, DataTypes);
const Champions = require('../models/champions')(sequelize, DataTypes);

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
    Games,
    Teams,
    Players,
    Champions,
};
