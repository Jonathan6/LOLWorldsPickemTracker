const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of all players will be here');
});

router.get('/:id', (req, res) => {
    const playerId = req.params.id;
    res.send(`Details for player with ID: ${playerId}`);
});

module.exports = router;
