require('dotenv').config();

const config = {
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB
}

console.log(config.host);

module.exports = config;