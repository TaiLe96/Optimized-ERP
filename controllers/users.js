const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const User = require('../models/User');

// @desc      Get all users
// @route     GET /api/auth/users
// @access    Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single user
// @route     GET /api/auth/users/:id
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc      Create user
// @route     POST /api/auth/users
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  // const user = await User.create(req.body);
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
      password,
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
      !password ||
      !department ||
      !role
    ) {
      return res.status(400).json({
        error: ' * Fields are required!'
      });
    }
    let user = new User(fields);

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
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    // Create User using callback func
    user.save((err, result) => {
      if (err) {
        console.log('Create new user error! ', err);
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json(result);
    });
  });

  // res.status(201).json({
  //   success: true,
  //   data: user
  // });
});

// @desc      Update user
// @route     PUT /api/auth/users/:id
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc      Delete user
// @route     DELETE /api/auth/users/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {}
  });
});
