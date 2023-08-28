const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./mongo')

const { FRONT_APP_URL, PORT } = process.env

const app = express()
const port = PORT || 3000

app.use(express.json());
app.use(cors({
  origin: FRONT_APP_URL
}));

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
