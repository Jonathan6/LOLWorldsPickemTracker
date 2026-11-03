'use strict';
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const filePath = ('data/miniSeed.csv');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const existing = await queryInterface.sequelize.query(
      'SELECT ign FROM players',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const existingValues = new Set(existing);

    const teams = await queryInterface.sequelize.query(
      'SELECT team_name, teams_id FROM teams',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const names = await new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(path.join(__dirname, filePath))
        .pipe(csv())
        .on('data', (row) => {
          if (row.position == 'team' || (existingValues.has(row.playername.trim()))) {
            return
          }
          existingValues.add(row.playername.trim());
          const teamId = teams.find(({team_name}) => team_name === row.teamname.trim()).teams_id;
          results.push({ign: row.playername.trim(), role: row.position.trim(), team_id: teamId});
        })
        .on('end', () => resolve(results))
        .on('error', reject);
      });
    await queryInterface.bulkInsert('Players', names, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  }
};
