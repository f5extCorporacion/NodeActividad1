const ModelRepairs = require('./repairs.model');

class GenerateRepairs {
  //Mostrar Todos los datos
  static async GetShowr() {
    return await ModelRepairs.findAll({
      where: { status: 'active' },
    });
  }

  //Metodo de creacion de Repairs
  static async PostPostR(datos) {
    return await ModelRepairs.create(datos);
  }
  static async SeleccionM(id) {
    return await User.findOne({
      where: {
        id: id,
      },
    });
  }

  //Actualizad campos
  static async ActualizarCampos(ParametrosEncontrados, NewDatos) {
    return await ParametrosEncontrados.update(NewDatos);
  }
  //forma de eliminar usuario sin eliminarlo de la base de datos
  //
  static async DeleteDataStatus(parametro) {
    return parametro.update({
      status: 'inactive',
    });
  }
}
module.exports = GenerateRepairs;
