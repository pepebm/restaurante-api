import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema  = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, min: 8 }  
});

// Validations
Schema.path('email').validate(email => {
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Assuming email has a text attribute
  return emailRegex.test(email);
}, 'The e-mail field is not correct or empty.');

export default mongoose.model('User', Schema);