const auth = require("../middleware/auth");
const { create, getAll, getByCategory, getById, update, delete: deleteDrink } = require('../controllers/drinks');

module.exports = function(app){
  app.post('/drink', auth, create);
  app.get('/drinks', getAll);
  app.get('/drinks/:categoryId', getByCategory);
  app.get('/drink/:id', getById);
  app.patch('/drink/:id', auth, update);
  app.delete('/drink/:id', auth, deleteDrink);
}