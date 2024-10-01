const express = require('express');
const router = express.Router();
const Game = require('../models/game')

// NEEDS EXTRA ATTENTION MOST DIFFICULT ROUTE TO CREATE
router.post('/', async (req, res) => {
    try {
      const { game_name, region } = req.body;
      const newGame = await Game.create({ game_name: game_name, region: region});
      
      res.status(201).json(newGame);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (game) {
          res.status(200).json(game);
        } else {
          res.status(404).json({ message: "Game not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

router.get('/', async (req, res) => {
    try {
      const games = await Game.findAll();
      res.status(200).json(games);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.delete('/:id', async (req, res) => {
  try {
      const deleted = await Game.destroy({
        where: { game_id: req.params.id }
      });
      if (deleted) {
        res.status(200).json({ message: "Game deleted"});
      } else {
        res.status(404).json({ message: "Game not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


module.exports = router;
