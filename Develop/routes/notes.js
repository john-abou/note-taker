// Import the helper functions to read/write to files
const { readDBFile, readFromFile, writeToFile, readAndAppend } = require('../helper/utils');

// Define the router for notes -- linked to index (static files at path /api/notes) 
const notes = require('express').Router()

//
notes.get('/', (req,res) => {
})

