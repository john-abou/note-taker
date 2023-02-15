// Import express, api route and custom middleware
const express = require('express');
const app = express();
const api = require('./routes/index')
const customMiddleware = 

// Configure the middleware for incoming requests over http methods
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use()

// Import and initialize the route for /api
app.use('/api', api)