const mongoose = require('mongoose');
const productSchema = require('./productModel').Schema;
const schemaOptions = {
  strict: false,
  timestamps: true,
};
const userschema = new mongoose.Schema(
  {
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:5},
    displayName:{type:String} ,
    role: {
      type: String,
      required: true,
      
    },
    shoppingCart:[productSchema],
  },
  // schemaOptions
  {
    strict: false,
    timestamps: true,
  }
);


module.exports = mongoose.model('userModel', userschema);
