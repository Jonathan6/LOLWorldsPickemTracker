const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
