const express = require('express');
const router = express.Router();

const gameRoutes = require('./game');
const championRoutes = require('./champion');
const playerRoutes = require('./player');

router.use('/game', gameRoutes);
router.use('/champion', championRoutes);
router.use('/player', playerRoutes);

router.get('', (req, res) => {
    res.send('Hello, World!');
});

module.exports = router;
