const express = require('express');
const mongoose = require('mongoose');
// Load env vars
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const colors = require('colors');
// to saving user credentials in th cookie
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

require('dotenv').config();

// Bring Route files
// const auth = require('./routes/auth');
// const users = require('./routes/users');

const app = express();

// Connect to Atlas MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log(
      `Online Marketplace Atlas MongoDB Connected!`.cyan.underline.bold
    )
  );

mongoose.connection.on('err', err => {
  console.log(
    `Online Marketplace Atlas MongoDB connection error: ${err.message}`.red
  );
});

// middlewares
// trace logs like this "GET /api/signup 404 0.602 ms - 149" in terminal
app.use(morgan('dev'));
// get json data from request body
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
/** cors with our API will be able to handle the request are coming form different origin */
app.use(cors());

// express routes middleware
// app.use('/api', authUserRoutes);
// app.use('/api', userRoutes);

// app.use(logger);
// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 2030;
app.listen(port, () => {
  console.log(
    `Online-Marketplace Server is running on port ${port}`.rainbow.bold
  );
});
