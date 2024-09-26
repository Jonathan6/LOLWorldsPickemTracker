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
router.post('/', );

// Read a team by ID
router.get('/:id', );

// Read a team by name
router.get('/name/:name', );

// Update a team by ID
router.put('/:id', );

// Delete a team by ID
router.delete('/:id', );

module.exports = router;
