// Import express, api route and custom middleware
const express = require('express');
const app = express();
const api = require('./routes/index');
const path = require('path');
const { clog } = require('./middleware/clog');

// Define the port
const PORT = process.env.PORT || 3001;

// Configure the middleware for incoming requests over http methods
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Configure custom middleware to log request information
app.use(clog);

// Import and initialize the route for /api
app.use('/api', api);

// Set the root for the app to use
app.use(express.static('public'));

// Set the response to a GET request for the home page
app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
})

// Wildcard route to send users a 404 msg
app.get('*', (req, res) => {
  res.status(404).send(`Sorry, the requested resource was not found.`)
})

// Set the server to listen for the given port number
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);