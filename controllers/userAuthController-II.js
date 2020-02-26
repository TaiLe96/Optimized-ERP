/**
 * User Contollers:
 * - It's responsibility is a controll business flows for all users and
 *   communiate with user router(to) and models(bring in)
 * - Applied jwt to generate signed token
 * - Appied express-jwt for authorization check
 */
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const User = require('../models/User');
// To generate signed token
const jwt = require('jsonwebtoken');
// For authorization check
const expressJwt = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandler');

/**
 * @method signup Register new user with salt & hashed password
 */

exports.signup = (req, res) => {
  console.log('req.body', req.body);

  // recieve image
  let form = new formidable.IncomingForm();
  form.keepExtensions = true; // to images type: gif, jpg...
  /** image parse using callback func */
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not be uploaded'
      });
    }

    // check for all fiels
    const {
      firstName,
      lastName,
      preferredName,
      email,
      employeeID,
      desk,
      cellPhone,
      department,
      role,
      location,
      description
    } = fields;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !employeeID ||
      !desk ||
      !cellPhone ||
      !department ||
      !role
    ) {
      return res.status(400).json({
        error: '* fields are required!'
      });
    }

    let user = new User(req.body);
    console.log(user);

    /**
     * get access file system
     * 1 kb = 1000
     * 1 mb = 1000000
     */
    if (files.photo) {
      // console.log('Files photo: ', files.photo);
      /** check image size */
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: 'Image should be less than 1mb in size'
        });
      }
      user.photo.data = fs.readFileSync(files.photo.path);
      user.photo.contentType = files.photo.type;
    }

    // Create User using callback func
    user.save((err, user) => {
      if (err) {
        console.log('New user signup error! ', err);
        return res.status(400).json({
          error: errorHandler(err)
        });
      }

      // Orgarnize salt & hashed password
      user.salt = undefined;
      user.hashed_password = undefined;

      res.json(user);
    });
  });
};

/**
 * @method signin
 */
exports.signin = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User with that email does not exist. Please signup!'
      });
    }
    // if user is found make sure the email and password match
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and Password do not match'
      });
    }

    // generate a signed token with user id (from mongodb) and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // set persist the token as 't' in cookie with expiry date
    res.cookie('t', token, { expire: new Date() + 999 });

    // return response with user and token too front-end client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

// User Sign Out
exports.signout = (req, res) => {
  res.clearCookie('t');
  res.json({ message: 'Signout success' });
};

// User SignIn Middleware with JWT & cookie-parser
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'auth'
});

// Authorization
exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: 'Access denied'
    });
  }
  next();
};

// To protect resources for authenctiated user and admin user
exports.isAdmin = (req, res, next) => {
  // admin === 1, user === 0
  if (req.profile.role === 'user') {
    return res.status(403).json({
      error: 'Admin resourse! Access denied'
    });
  }
  next();
};
// To protect resources for authenctiated user by the role type
exports.isHrMgr = (req, res, next) => {
  // admin === 1, user === 0
  if (req.profile.role !== 'HR-Manager' || 'admin') {
    return res.status(403).json({
      error: 'Only HR-Manager resourse! Access denied'
    });
  }
  next();
};
// To protect resources for authenctiated user by the role type
exports.isInvMgr = (req, res, next) => {
  // admin === 1, user === 0
  if (req.profile.role !== 'Inventory-Manager' || 'admin') {
    return res.status(403).json({
      error: 'Only Inventory-Manager resourse! Access denied'
    });
  }
  next();
};
// To protect resources for authenctiated user by the role type
exports.isSleMgr = (req, res, next) => {
  // admin === 1, user === 0
  if (req.profile.role !== 'Sales-Manager' || 'admin') {
    return res.status(403).json({
      error: 'Only Sales-Manager resourse! Access denied'
    });
  }
  next();
};
