const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of all games will be here');
});

router.get('/:id', (req, res) => {
    const gameId = req.params.id;
    res.send(`Details for game with ID: ${gameId}`);
});


module.exports = router;
