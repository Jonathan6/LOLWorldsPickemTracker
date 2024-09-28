const express = require('express');
const dotenv = require('dotenv').config();
const routes = require('./routes');
const db = require('./config/db');
const { sequelize, Team, Player, Champion } = require('./models');
// GAME
const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());


app.use('/api', routes);

db.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Failed to sync database:', err);
  })
  .catch(err => console.error('Error during DB sync:', err));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
