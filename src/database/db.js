require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.URLBASE, {
  logging: false,
});
async function authetica() {
  try {
    await sequelize.authenticate();
    console.log('Conexion esta funcionando ok 🍾');
  } catch (error) {}
}

async function syncUpp() {
  try {
    //{force:true}- forza los cambios desyncronizacion
    //Esto nos borra los datos en ejecucion inicial

    sequelize.sync();
    console.log('Syncronizacion esta funcionando ok 😝');
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  authetica,
  syncUpp,
  sequelize,
};
