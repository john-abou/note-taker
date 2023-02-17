// Import the helper functions to read/write to files
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/utils');

// Define the router for notes -- linked to index (static files at path /api/notes) 
const notes = require('express').Router()

//
notes.get('/', (req,res) => {
    // GET /notes should return the notes.html file
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

module.exports = notes;

