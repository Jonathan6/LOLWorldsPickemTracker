const express = require('express');
const router = express.Router();

const playerRoutes = require('./player');
const teamRoutes = require('./team');
const championRoutes = require('./champion');
// const gameRoutes = require('./game');

router.use('/player', playerRoutes);
router.use('/team', teamRoutes);
router.use('/champion', championRoutes);
// router.use('/game', gameRoutes);

router.get('', (req, res) => {
    res.send('Hello, World!');
});

module.exports = router;
