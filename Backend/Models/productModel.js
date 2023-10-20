const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( 
    {
        name: {
          type: String,
          minLength: 3,
          maxLength: 30,
        },
        quantity: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        }
      },
      // schemaOptions
      {
        strict: true,
        timestamps: true,
      }
    );

 module.exports = mongoose.model('productModel', productSchema);
 module.exports.Schema = productSchema;   