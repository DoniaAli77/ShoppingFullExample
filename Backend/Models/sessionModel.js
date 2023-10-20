const mongoose = require("mongoose");
const userModel = require("./userModel");
const schemaOptions = {
  strict: true,
  timestamps: true,
};
const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      requied: true,
    },
    token: {
      type: String,
      requied: true,
    },
    expiresAt: {
      type: Date,
      requied: true,
    },
  },
 schemaOptions
);

module.exports = mongoose.model("sessionSchema", sessionSchema);
