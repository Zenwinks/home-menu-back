const auth = require("../middleware/auth");
const { create, getAll, getByDrink, getById, update, delete: deleteIngredient } = require('../controllers/ingredients');

module.exports = function(app){
  app.post('/ingredient', auth, create);
  app.get('/ingredients', getAll);
  app.get('/ingredient/:id', getById);
  app.patch('/ingredient/:id', auth, update);
  app.delete('/ingredient/:id', auth, deleteIngredient);
}