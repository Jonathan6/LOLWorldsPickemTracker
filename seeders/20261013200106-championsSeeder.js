'use strict';
const path = require('path');
const readCsv = require('../utils/readCsv.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rows = await readCsv(path.join(__dirname, 'data/champions.csv'));
    const records = rows.map((row) => ({
      name: row.Name.trim(),
      title: row.Title.trim(),
      class: row.Class.trim(),
      release_date: row.Date.trim()
    }));

    await queryInterface.bulkInsert('Champions', records, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Champions', null, {});
  }
};
