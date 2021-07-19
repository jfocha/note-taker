const { findById, deleteNote, createNewNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const userIndex = findById(req.params.id, notes)

    if (userIndex === -1) return res.status(404).json({})
   console.log(notes)

   let index = 0;
   for (let i = 0; i < notes.length; i++) {
       if(notes[i] === userIndex){
           index = i;
       }
   }

    notes.splice(index, 1)
deleteNote(notes)
    res.json(notes)
  })

module.exports = router;