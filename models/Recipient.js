const mongoose = require('mongoose');

//same as const Schema = mongoose.Schema
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  //to take single response from user
  responded: {type: Boolean, default: false}
});

module.exports = recipientSchema;
