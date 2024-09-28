const express = require('express');
const router = express.Router();
const Team = require('../models/team')

// Create a new team
router.post('/', async (req, res) => {
    try {
      const { team_name, region } = req.body;
      const newTeam = await Team.create({ team_name: team_name, region: region});
      
      res.status(201).json(newTeam);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Read a team by ID
router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (team) {
          res.status(200).json(team);
        } else {
          res.status(404).json({ message: "Team not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

// Read all teams
router.get('/', async (req, res) => {
    try {
      const teams = await Team.findAll();
      res.status(200).json(teams);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Read a team by name
router.get('/name/:name', async (req, res) => {
  try {
    const team = await Team.findOne({
      where: {
        team_name: req.params.name
      }
    });

    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: "Team not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Update a team by ID
// router.put('/:id', (req, res));

// Delete a team by ID
router.delete('/:id', async (req, res) => {
  try {
      const deleted = await Team.destroy({
        where: { team_id: req.params.id }
      });
      if (deleted) {
        res.status(200).json({ message: "Team deleted"});
      } else {
        res.status(404).json({ message: "Team not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
