'use strict';
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const filePath = ('data/miniSeed.csv');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const teams = await queryInterface.sequelize.query(
        'SELECT team_name, teams_id FROM teams',
        { type: Sequelize.QueryTypes.SELECT }
      );

      const names = await new Promise((resolve, reject) => {
        const results = [];
        const stack = [];

        fs.createReadStream(path.join(__dirname, filePath))
          .pipe(csv())
          .on('data', (row) => {
            if (row.participantid.trim() === "100") {
              stack.push(row);
              return
            }
            if (row.participantid.trim() === "200") {
              stack.push(row);

              const blueTeamId = teams.find(({team_name}) => team_name === stack[0].teamname.trim()).teams_id;
              const redTeamId = teams.find(({team_name}) => team_name === stack[1].teamname.trim()).teams_id;
              var winnerId;

              if (stack[0].result.trim() === "1") {
                winnerId = blueTeamId;
              } else {
                winnerId = redTeamId;
              }

              results.push({
                red_team_id: redTeamId, 
                blue_team_id: blueTeamId, 
                winner_team_id: winnerId,
                year: stack[0].year.trim(), 
                date: new Date(stack[0].date.trim()), 
                tournament: stack[0].league.trim(), 
                game_length: stack[0].gamelength.trim()
              });
              stack.pop();
              stack.pop();
            }
          })
          .on('end', () => resolve(results))
          .on('error', reject);
        });
      await queryInterface.bulkInsert('Games', names, {});
    },
    
    //find both team entries 
    //find their id's
    //match date, tournament, gamelength, assume year for now
    //table: red_team_id, blue_team_id, winner_team_id, year, date, tournament, game_length

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  }
};
