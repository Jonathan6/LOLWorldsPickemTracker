const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const results = [];
    
    // Resolve the path to your CSV file
    const csvFilePath = path.join(__dirname, '../data/users.csv');

    // Create a promise to handle the asynchronous CSV stream reading
    await new Promise((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
          // 🛠️ ORGANIZE AND FORMAT YOUR DATA HERE
          results.push({
            firstName: row.First_Name,               // Map CSV headers to DB columns
            lastName: row.Last_Name,
            email: row.Email_Address.toLowerCase(),  // Perform string transformations
            createdAt: new Date(),                   // Add required timestamps
            updatedAt: new Date()
          });
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });

    // Run the bulk insert with your newly formatted array
    if (results.length > 0) {
      await queryInterface.bulkInsert('Users', results, {});
    }
  },

  async down (queryInterface, Sequelize) {
    // Optional: Logic to clear the table or undo the seed
    await queryInterface.bulkDelete('Users', null, {});
  }
};