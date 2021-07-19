const fs = require("fs");
const path = require("path");
const { nanoid } = require('nanoid');

function findById(id, notesArray) {
    // console.log(notesArray)
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function createNewNote(body, notesArray) {
    const note = body;
    note.id = nanoid();
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

function deleteNote(notesArray) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return notesArray;
}

module.exports = {
    findById,
    deleteNote,
    createNewNote
};