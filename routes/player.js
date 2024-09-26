const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of all players will be here');
});

router.get('/:id', (req, res) => {
    const playerId = req.params.id;
    res.send(`Details for player with ID: ${playerId}`);
});


/*
CRUD

Create
    create new player entry. We need:
        name
        team
        role

Read
    read data by ID

    read data by name

Update
    update by ID. We need
        team, role, name

    update by name. We need
        team, role

Delete

    delete by ID

    delete by name
*/

module.exports = router;
