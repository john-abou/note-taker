// Import express, api route and custom middleware
const express = require('express');
const app = express();
const api = require('./routes/index');
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

// Set the server to listen for the given port number
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);