const auth = require("../middleware/auth");
const { signIn, getMe } = require('../controllers/auth');

module.exports = function(app){
  app.post('/signin', signIn);
  app.get('/me', auth, getMe);
}

