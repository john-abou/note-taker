// Import express, api route and custom middleware
const express = require('express');
const app = express();
const api = require('./routes/index')
const customMiddleware = require('./middleware/logReqs')

// Configure the middleware for incoming requests over http methods
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Configure custom middleware to log request information
app.use(customMiddleware);

// Import and initialize the route for /api
app.use('/api', api)