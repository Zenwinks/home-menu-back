const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./mongo')

const { FRONT_APP_URL, PORT } = process.env

const app = express()
const port = PORT || 3000

app.use(express.json());

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./routes/auth')(app)
require('./routes/categories')(app)
require('./routes/drinks')(app)
require('./routes/ingredients')(app)

app.get('/', (req, res) => {
  res.send('Hello World I love potatoes!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
