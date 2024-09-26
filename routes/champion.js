const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of all champions will be here');
});

router.get('/:id', (req, res) => {
    const championId = req.params.id;
    res.send(`Details for champion with ID: ${championId}`);
});

module.exports = router;
