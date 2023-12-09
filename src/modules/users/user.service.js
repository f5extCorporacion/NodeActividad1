const User = require('./user.model');

//En el service interactua el modelo
// datos enviados

class GenerateUsuarios {
  //Mostrar todos los datos
  static async mostrarTodo() {
    return await User.findAll({
      where: { status: 'active' },
    });
  }

  //method creacion usuarios

  static async crear(datos) {
    return await User.create(datos);
  }

  static async Seleccion(id) {
    return await User.findOne({
      where: {
        id: id,
      },
    });
  }
  //Actualizar datos
  static async UpdateDatos(ParametrosEncontrados, data) {
    return await ParametrosEncontrados.update(data);
  }

  static async Deletedata(parametros) {
    //active inactive actualiza el status
    return await parametros.update({
      status: 'inactive',
    });
  }
}

module.exports = GenerateUsuarios;
