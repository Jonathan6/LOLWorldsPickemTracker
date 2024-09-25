const db = require('./config/db');
const { Player, Team, Match, Champion } = require('./models');

db.sync({ force: false })
  .then(() => {
      console.log('Database synced');
  })
  .catch(err => {
      console.error('Error syncing database:', err);
  });
