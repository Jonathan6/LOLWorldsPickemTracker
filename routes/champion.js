const express = require('express');
const router = express.Router();

/*
CRUD
Create
    create by name. Need 

    create by ID

Read
    read by ID

    ready by name

Update
    by ID or name
        update bans

        update picks

Delete
    delete by ID or name

*/


router.get('/', (req, res) => {
    res.send('List of all champions will be here');
});

router.get('/:id', (req, res) => {
    const championId = req.params.id;
    res.send(`Details for champion with ID: ${championId}`);
});

module.exports = router;
