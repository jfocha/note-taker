const { findById, createNewNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;