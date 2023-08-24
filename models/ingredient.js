const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);