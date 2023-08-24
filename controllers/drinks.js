const Drink = require('../models/drink')

module.exports.create = async (req, res) => {
  try {
    if(req.body?.name && req.body?.category) {
      const newDrink = new Drink(req.body)
      await newDrink.save()
      res.status(200).json(newDrink)
    } else {
      throw new Error('Please provide data to create a new drink')
    }
  } catch (error) {
    res.status(400).send(`Error drinks create: ${error.message}`)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const drinks = await Drink.find().populate('category').populate('ingredients')
    res.status(200).json(drinks)
  } catch (error) {
    res.status(400).send(`Error drinks getAll: ${error.message}`)
  }
}

module.exports.getByCategory = async (req, res) => {
  try {
    if(req.params?.categoryId) {
      const drinks = await Drink.find({ category: req.params.categoryId, private: false }).populate('category').populate('ingredients')
      const availableDrinks = drinks.filter(drink => {
        const drinkIsAvailable = drink.ingredients.every(ingredient => ingredient.count > 0) || drink.ingredients.length <= 0
        if(drinkIsAvailable) return drink
      })
      res.status(200).json(availableDrinks)
    }
  } catch (error) {
    res.status(400).send(`Error drinks getByCategory: ${error.message}`)
  }
}

module.exports.getById = async (req, res) => {
  try {
    if(req.params?.id) {
      const drink = await Drink.findById(req.params.id).populate('category').populate('ingredients')
      res.status(200).json(drink)
    }
  } catch (error) {
    res.status(400).send(`Error drinks getById: ${error.message}`)
  }
}

module.exports.update = async (req, res) => {
  try {
    if(req.params?.id && req.body) {
      const drink = await Drink.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
      res.status(200).json(drink)
    }
  } catch (error) {
    res.status(400).send(`Error drinks update: ${error.message}`)
  }
}

module.exports.delete = async (req, res) => {
  try {
    if(req.params?.id) {
      await Drink.findByIdAndDelete(req.params.id)
      res.status(200).send('Drink deleted successfully')
    }
  } catch (error) {
    res.status(400).send(`Error drinks delete: ${error.message}`)
  }
}