// Import the helper functions to read/write to files
const { readFromFile, writeToFile, readAndAppend, readAndDelete, uuid } = require('../helpers/utils');

// Define the router for notes -- linked to index (static files at path /api/notes) 
const notes = require('express').Router();

// GET route for retrieving the notes
notes.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for submitting a note to the db
notes.post('/', (req,res) => {
    // Make sure the request is not null
    const { title, text } = req.body;
    if (title && text) {
        // Define a new note to be added to the db file
        const newNote = {
            title,
            text,
            id: uuid()
        };

        // read the file and append the new note to the db file
        readAndAppend('./db/db.json', newNote);

        // Return the new note to the client.
        res.json(newNote);
    } else {
        // Tell the client they don't have sufficient info
        res.status(500).send('Incomplete information in your request. Server error.')
    }
});

notes.delete('/:id', (req, res) => {
    // Deconstruct the response body to get the id
    const id = req.params.id; 
    console.log('from notes.js: ' + id);
    if ( id ) {
        readAndDelete('./db/db.json', id);
        res.send(`Successfully deleted the note with the id: ${id}`);
    } else {
        res.status(404).send('ID not found')
    }
})



module.exports = notes;

