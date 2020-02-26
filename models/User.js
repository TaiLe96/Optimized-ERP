const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const UserSchema = new mongoose.Schema(
  {
    //
    firstName: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32
    },
    lastName: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32
    },
    preferredName: {
      type: String,
      trim: true,
      require: true,
      maxlength: 100
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: 32
    },
    employeeID: {
      type: String,
      trim: true,
      require: true,
      unique: 32
    },
    desk: {
      type: String,
      trim: true,
      require: true,
      unique: 50
    },
    cellPhone: {
      type: String,
      trim: true,
      require: true,
      unique: 50
    },
    department: {
      type: String,
      trim: true,
      require: true,
      default: 'Select Dept',
      enum: ['Select Dept', 'HR', 'Sales', 'Inventory', 'IT']
      // enum means string objects
    },
    role: {
      type: String,
      default: 'Select Role',
      enum: [
        'Select Role',
        'user',
        'admin',
        'HR-Manager',
        'Inventory-Manager',
        'Sales-Manager'
      ]
      // enum means string objects
    },
    location: {
      type: String,
      require: true,
      maxlength: 200
    },
    description: {
      type: String,
      maxlength: 2000
    },

    photo: {
      data: Buffer,
      contentType: String
    },

    // virtual filed
    hashed_password: {
      type: String,
      required: true
    },
    // User profile
    about: {
      type: String,
      trim: true
    },
    // salt needs unique string
    salt: String,

    history: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

// virtual field for clien side after install uuid
UserSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    // salt gives us random string as the hashed password
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// Create userSchema method to apply encryptPassword
UserSchema.methods = {
  // Create authenticate method in user model
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  }
};

module.exports = mongoose.model('User', UserSchema);
