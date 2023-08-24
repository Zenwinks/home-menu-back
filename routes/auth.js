const { signIn } = require('../controllers/auth');

module.exports = function(app){
  app.post('/signin', signIn);
}