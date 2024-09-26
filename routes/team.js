const express = require('express');
const router = express.Router();

/*
CRUD

Create
    create new team. Needs
        team name
        region


Read
    read by name

    read by ID

    read by region

Update
    update by name:
        need region
    
    update by ID:
        need region, name

Delete
    delete by name

    delete by ID
*/

// Create a new team
router.post('/', async (req, res) => {
    try {
      const { name, region} = req.body;
      const newTeam = await Team.create({ name, region});
      res.status(201).json(newTeam);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Read a team by ID
router.get('/:id', async (req, res) => {
    try {
        const team = await team.findByPk(req.params.id);
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
router.get('/name/:name', );

// Update a team by ID
router.put('/:id', );

// Delete a team by ID
router.delete('/:id', );

module.exports = router;
