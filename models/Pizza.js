const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  base: [String],
  sauce: [String],
  cheese: String,
  veggies: [String],
  meats: [String]
});

module.exports = mongoose.model('Pizza', pizzaSchema);
