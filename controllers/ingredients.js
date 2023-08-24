const Ingredient = require('../models/ingredient')
const Drink = require('../models/drink')

module.exports.create = async (req, res) => {
  try {
    if(req.body?.name) {
      const newIngredient = new Ingredient(req.body)
      await newIngredient.save()
      res.status(200).json(newIngredient)
    } else {
      throw new Error('Please provide data to create a new ingredient')
    }
  } catch (error) {
    res.status(400).send(`Error ingredients create: ${error.message}`)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const ingredients = await Ingredient.find()
    res.status(200).json(ingredients)
  } catch (error) {
    res.status(400).send(`Error ingredients getAll: ${error.message}`)
  }
}

module.exports.getById = async (req, res) => {
  try {
    if(req.params?.id) {
      const ingredient = await Ingredient.findById(req.params.id)
      res.status(200).json(ingredient)
    }
  } catch (error) {
    res.status(400).send(`Error ingredients getById: ${error.message}`)
  }
}

module.exports.update = async (req, res) => {
  try {
    if(req.params?.id && req.body) {
      const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
      res.status(200).json(ingredient)
    }
  } catch (error) {
    res.status(400).send(`Error ingredients update: ${error.message}`)
  }
}

module.exports.delete = async (req, res) => {
  try {
    if(req.params?.id) {
      await Ingredient.findByIdAndDelete(req.params.id)
      await Drink.deleteMany({ ingredients: req.params.id })
      res.status(200).send('Ingredient deleted successfully')
    }
  } catch (error) {
    res.status(400).send(`Error ingredients delete: ${error.message}`)
  }
}