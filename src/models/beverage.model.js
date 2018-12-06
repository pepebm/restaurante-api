import moongose from 'mongoose';

const Schema = moongose.Schema({
  name: { type: String, required: true, max: 25 },
  price: { type: Number, required: true, min: 5 },
  alcohol: { type: Boolean, required: true, default: false },
  capacity: { type: Number, required: true } // ml
});

export default moongose.model('Beverage', Schema);