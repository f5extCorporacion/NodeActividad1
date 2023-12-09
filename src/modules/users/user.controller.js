//crud users
const service = require('./user.service');
//POST
const PostCreate = async (req, res, next) => {
  const { name, email, password } = req.body;
  //Utilizando modelo para creacion de datos
  const DataComplete = await service.crear({
    name,
    email,
    password,
  });
  //resultado de datos enviados
  return await res.status(201).json({
    mensaje: 'User creado',
    data: DataComplete,
  });
};

const Readget = async (req, res, next) => {
  const envios = await service.mostrarTodo();
  //resultado de datos enviados
  return await res.status(200).json({
    mensaje: 'Mostrando usuario Get  😝',
    data: envios,
  });
};

//PARAMETRO CON GET ID
const ReadLeer = async (req, res, next) => {
  let { id } = req.params;
  //resultado de datos enviados
  const envioid = await service.Seleccion(id);
  return await res.status(200).json({
    mensaje: 'Mostrando usuarios por ID ok  😝',
    data: envioid,
  });
};

const UpdateActualizar = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const Envioupdate = await service.Seleccion(id);
  //validacion si existe Dato
  if (!Envioupdate) {
    return res.status(404).json({
      status: 'error',
      mensaje: `id Buscado no existe ${id}`,
    });
  }

  const complit = await service.UpdateDatos(Envioupdate, {
    name,
    email,
    password,
  });
  return res.status(200).json({
    status: 'enviados',
    mensaje: complit,
  });
};

const DeleteEliminar = async (req, res, next) => {
  const { id } = req.params;

  const Envioupdat = await service.Seleccion(id);
  if (!Envioupdat) {
    return res.status(404).json({
      status: 'error',
      mensaje: `id Buscado no existe ${id}`,
    });
  }
  await service.Deletedata(Envioupdat);
  return res.status(204).json(null);
};

module.exports = {
  PostCreate,
  Readget,
  ReadLeer,
  UpdateActualizar,
  DeleteEliminar,
};
