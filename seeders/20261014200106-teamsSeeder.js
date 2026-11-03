'use strict';
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const filePath = ('data/miniSeed.csv');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const existing = await queryInterface.sequelize.query(
      'SELECT team_name FROM teams',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const existingValues = new Set(existing);

    const names = await new Promise((resolve, reject) => {
      const results = [];
      console.log(results);
      fs.createReadStream(path.join(__dirname, filePath))
        .pipe(csv())
        .on('data', (row) => {
          if (row.position =! 'team' || (existingValues.has(row.teamname.trim()))) {
            return
          }
          existingValues.add(row.teamname.trim());
          results.push({team_name: row.teamname.trim(), region: row.league.trim()});
        })
        .on('end', () => resolve(results))
        .on('error', reject);
      });
    
    await queryInterface.bulkInsert('Teams', names, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
