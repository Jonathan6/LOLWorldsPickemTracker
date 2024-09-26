const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());


app.use('/api', routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
