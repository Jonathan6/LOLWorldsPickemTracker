const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const db = require('./config/db');

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());


app.use('/api', routes);

db.sync({ force: false })  // Make sure to sync the database
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Failed to sync database:', err);
  });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
