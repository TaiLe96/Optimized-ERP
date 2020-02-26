const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    photo: {
      data: Buffer,
      contentType: String
    },
    firstName: {
      type: String,
      required: [true, 'Please add a firstName'],
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters']
    },
    lastName: {
      type: String,
      required: [true, 'Please add a lastName'],
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters']
    },
    preferredName: {
      type: String,
      required: [true, 'Please add a preferredName'],
      trim: true,
      maxlength: [100, 'Name can not be more than 50 characters']
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    employeeID: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false
    },
    desk: {
      type: String,
      required: [true, 'Please add a desk number'],
      unique: true
    },
    cellPhone: {
      type: String,
      required: [true, 'Please add a cellPhone number'],
      unique: true
    },
    department: {
      type: String,
      enum: ['HR', 'IT', 'Sales', 'Inventory'],
      unique: true
    },
    role: {
      type: String,
      // hm: hr manager, im: inventory mananger, sm: Sales manager
      enum: [
        'Select Dept',
        'user',
        'admin',
        'HR-Manager',
        'Sales',
        'Inventory-Manager',
        'IT'
      ],
      default: 'Select Dept'
    },
    location: {
      type: String,
      required: [true, 'Please input a location']
    },
    description: {
      type: String,
      required: [false, 'Please input a loacation'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    history: {
      type: Array,
      default: []
    }
  },

  { timestamps: true }
);

// Encrypt password using bcrypt
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function() {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model('User', UserSchema);
