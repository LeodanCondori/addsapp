const express = require('express');
// const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

const server = express();

server.name = 'API';

// Use built-in Express middleware
server.use(express.urlencoded({ extended: true, limit: '50mb' })); // For form data
server.use(express.json({ limit: '50mb' })); // For JSON data

// server.use(cookieParser());
server.use(morgan('dev'));

// CORS configuration (more concise and secure)
const allowedOrigins = ['http://localhost:5173', '*'];

server.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/api/v1', routes);

// Error handling middleware (improved)
server.use((err, req, res, next) => {
  console.error(err);

  const status = err.status || 500;
  let message = err.message || 'Internal Server Error';

  if (process.env.NODE_ENV === 'development') {
    message = err.stack || message;
  }

  res.status(status).json({ error: message });
});

module.exports = server;
