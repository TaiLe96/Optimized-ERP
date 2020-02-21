const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    //
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32
    },
    Photo: {
        data: Buffer,
        contentType: String
      },
    Shipping_Address: {
        type: String,
        trim: true,
        requre: true,
        maxlength: 350
      },
    Billing_Address: {
        type: String,
        trim: true,
        requre: true,
        maxlength: 350
      },
    Telephone: {
        type: String,
        trim: true,
        require: true,
        maxlength: 50
      },
    Fax: {
        type: String,
        trim: true,
        require: false,
        maxlength: 50
      },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: 32
    },
    Status: {
        type: String,
        default: true,
        require: true
    },

    // user purchased history
    history: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model('Customer', customerSchema);