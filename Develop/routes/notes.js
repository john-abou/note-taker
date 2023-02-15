// Import the helper functions to read/write to files

// Define the router for notes -- linked to index (static files at path /api/notes) 
const notes = require('express').Router()

notes.get('/', (req,res) => {
    readFile
})

