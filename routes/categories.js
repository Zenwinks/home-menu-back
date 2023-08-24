const auth = require("../middleware/auth");
const { create, getAll, getById, update, delete: deleteCategory } = require('../controllers/categories');

module.exports = function(app){
  app.post('/category', auth, create);
  app.get('/categories', getAll);
  app.get('/category/:id', getById);
  app.patch('/category/:id', auth, update);
  app.delete('/category/:id', auth, deleteCategory);
}