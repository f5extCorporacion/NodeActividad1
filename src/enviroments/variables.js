require('dotenv').config();

const envs = {
  //objeto variables
  PORT: process.env.PORT,
  URLBASE: process.env.URLBASE,
};
module.exports = envs;
