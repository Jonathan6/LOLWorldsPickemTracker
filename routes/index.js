const express = require('express');
const router = express.Router();

// const gameRoutes = require('./game');
const playerRoutes = require('./player');
const teamRoutes = require('./team');
const championRoutes = require('./champion');

// router.use('/game', gameRoutes);
router.use('/player', playerRoutes);
router.use('/team', teamRoutes);
router.use('/champion', championRoutes);

router.get('', (req, res) => {
    res.send('Hello, World!');
});

module.exports = router;
