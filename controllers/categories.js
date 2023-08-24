const Category = require('../models/category')
const Drink = require('../models/drink')

module.exports.create = async (req, res) => {
  try {
    if(req.body?.name) {
      const newCategory = new Category(req.body)
      await newCategory.save()
      res.status(200).json(newCategory)
    } else {
      throw new Error('Please provide data to create a new category')
    }
  } catch (error) {
    res.status(400).send(`Error categories create: ${error.message}`)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (error) {
    res.status(400).send(`Error categories getAll: ${error.message}`)
  }
}

module.exports.getById = async (req, res) => {
  try {
    if(req.params?.id) {
      const category = await Category.findById(req.params.id)
      res.status(200).json(category)
    }
  } catch (error) {
    res.status(400).send(`Error categories getById: ${error.message}`)
  }
}

module.exports.update = async (req, res) => {
  try {
    if(req.params?.id && req.body) {
      const category = await Category.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
      res.status(200).json(category)
    }
  } catch (error) {
    res.status(400).send(`Error categories update: ${error.message}`)
  }
}

module.exports.delete = async (req, res) => {
  try {
    if(req.params?.id) {
      await Category.findByIdAndDelete(req.params.id)
      await Drink.deleteMany({ category: req.params.id })
      res.status(200).send('Category deleted successfully')
    }
  } catch (error) {
    res.status(400).send(`Error categories delete: ${error.message}`)
  }
}