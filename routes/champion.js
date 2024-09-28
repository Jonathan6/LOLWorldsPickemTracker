const express = require('express');
const router = express.Router();
const Champion = require('../models/champion')

router.post('/', async (req, res) => {
    try {
      const { champion_name} = req.body;
      const newChampion = await Champion.create({ champion_name: champion_name});
      
      res.status(201).json(newChampion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const champion = await Champion.findByPk(req.params.id);
        if (champion) {
          res.status(200).json(champion);
        } else {
          res.status(404).json({ message: "Champion not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

router.get('/', async (req, res) => {
    try {
      const champions = await Champion.findAll();
      res.status(200).json(champions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.get('/name/:name', async (req, res) => {
  try {
    const champion = await Champion.findOne({
      where: {
        champion_name: req.params.name
      }
    });

    if (champion) {
      res.status(200).json(champion);
    } else {
      res.status(404).json({ message: "Champion not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const deleted = await Champion.destroy({
        where: { champion_id: req.params.id }
      });
      if (deleted) {
        res.status(200).json({ message: "Champion deleted"});
      } else {
        res.status(404).json({ message: "Champion not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
