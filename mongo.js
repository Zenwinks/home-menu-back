const mongoose = require('mongoose');

const { DB_URL } = process.env;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);
}