const express = require('express');
const router = express.Router();
const Player = require('../models/player')

// Get all players
router.get('/', async (req, res) => {
    try {
      const players = await Player.findAll();
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Get a player by ID
router.get('/:id', async (req, res) => {
    try {
        const player = await Player.findByPk(req.params.id);
        if (player) {
          res.status(200).json(player);
        } else {
          res.status(404).json({ message: "Player not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});


// Create a new player
router.post('/', async (req, res) => {
    try {
      const { player_name, team_id, role} = req.body;
      const newPlayer = await Player.create({ player_name, team_id, role});
      res.status(201).json(newPlayer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


module.exports = router;
