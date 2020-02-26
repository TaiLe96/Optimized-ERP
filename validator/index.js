/**
 * Create helper method to validate user data on signup process,
 * apply to user routes
 */
exports.userSignupValidator = (req, res, next) => {
  console.log('validator: ', req.body);
  req.check('firstName', 'First Name is required').notEmpty();
  req.check('lastName', 'Last Name is required').notEmpty();
  req.check('employeeID', 'Employee ID is required').notEmpty();
  req.check('desk', 'Desk phone number is required').notEmpty();
  req.check('cellPhone', 'Cell phone number is required').notEmpty();
  req.check('department', 'Department Name is required').notEmpty();
  req.check('role', 'Role type is required').notEmpty();
  req
    .check('email', 'Email must be between 3 to 32 characters')
    .matches(/.+\@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
      min: 4,
      max: 32
    });
  req.check('password', 'Password is required').notEmpty();
  req
    .check('password')
    .isLength({ min: 6 })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('Password must contain a number');
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
