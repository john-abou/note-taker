// Static files from /api/notes
const express = require('Express');
const app = express();

//Import and initialize the modular router for /notes 
const notesRouter = require('./notes');
app.use('notes', notesRouter);

module.exports = app;