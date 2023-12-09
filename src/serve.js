//instalaciones
//npm i -D nodemon
//npm i express sequelize pg pg-hstore dotenv env-var
require('dotenv').config();
const app = require('./app');
const { authetica, syncUpp } = require('./database/db');
const { envs } = require('./enviroments/variables');
const port = process.env.PORT || 3000;

async function mainn() {
  try {
    await authetica();
    await syncUpp();
    console.log('ejecucion ok');
  } catch (error) {
    console.log('no conect :/');
  }
}
mainn();
app.listen(port, () => {
  console.log(`Render en port ${port}`);
});
