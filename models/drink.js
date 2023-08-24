const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  ingredients: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient'
    }],
    default: null
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  icon: {
    type: String,
    default: null
  },
  count: {
    type: Number,
    default: 0
  },
  private: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Drink', drinkSchema);