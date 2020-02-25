const path = require('path');
const express = require('express');
// const logger = require('./middleware/logger');
// Load env vars
require('dotenv').config({ path: './config/config.env' });
const morgan = require('morgan');
const colors = require('colors');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./middleware/error');
const connectMongoDBAtlas = require('./config/db');

// Connect to Atlas MongodB
connectMongoDBAtlas();

// Bring Route files
const auth = require('./routes/auth');
const users = require('./routes/users');

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// File uploading
app.use(fileupload());

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/auth', auth);
app.use('/api/users', users);

app.use(errorHandler);

// app.use(logger);
// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 2019;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
