// Import the helper functions to read/write to files
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/utils');

// Define the router for notes -- linked to index (static files at path /api/notes) 
const notes = require('express').Router();

// GET route for retrieving the notes
notes.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for submitting a note to the db
notes.post('/', (req,res) => {
    res.json(req.body);
});



module.exports = notes;

