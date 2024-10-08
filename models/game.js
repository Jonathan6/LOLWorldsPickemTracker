const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Game = db.define('Game', {
    game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    drakes_killed: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    baron_steals: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    team_1_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Team',
            key: 'team_id'
        }
    },
    team_2_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Team',
            key: 'team_id'
        }
    },
    winner_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Team',
            key: 'team_id'
        }
    },
    team_1_top_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_1_jungle_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_1_mid_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_1_adc_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_1_support_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_2_top_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_2_jungle_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_2_mid_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_2_adc_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    team_2_support_champion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    first_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    second_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    third_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    fourth_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    fifth_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    sixth_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    seventh_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    eighth_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    ninth_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    },
    tenth_ban: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Champion',
            key: 'champion_id'
        }
    }
}, {
    modelName: 'game',
    freezeTableName: true,
    tableName: 'game',
    timestamps: false
});

module.exports = Game;
