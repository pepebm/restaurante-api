import moongose from 'mongoose';

const Schema = moongose.Schema({
  name: { type: String, required: true, max: 25, unique: true },
  price: { type: Number, required: true },
  alcohol: { type: Boolean, required: true, default: false },
  size: { type: Number, required: true }, // ml
  price: { type: Number, required: true },
  stock: { type: Number, required: true, min: 1 },
  restock: { type: Number, required: true },
  kcal: { type: Number, required: true }
});


export default moongose.model('Beverage', Schema);