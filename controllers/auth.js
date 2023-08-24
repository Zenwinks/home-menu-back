const jwt = require("jsonwebtoken");

const { ADMIN_USERNAME, ADMIN_PWD, TOKEN_KEY } = process.env;

module.exports.signIn = (req, res) => {
  try {
    const { username, password } = req.body;
    if(username && password) {
      if(username === ADMIN_USERNAME && password === ADMIN_PWD) {
        const token = jwt.sign(
          { username },
          TOKEN_KEY,
          {
            expiresIn: "24h",
          }
        );

        res.status(200).json({ accessToken: token });
      } else {
        throw new Error('Invalid username or password');
      }
    } else {
      res.status(400).send('Missing username or password');
    }
  } catch(error) {
    res.status(400).send(`Error auth signIn: ${error.message}`)
  }
}