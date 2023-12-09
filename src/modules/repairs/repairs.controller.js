const service1 = require('./repairs.service');

const GetShowR = async (req, res, next) => {
  const dqww = await service1.GetShowr();
  return await res.status(200).json({
    mensaje: 'send ok datos correctos.',
    data: dqww,
  });
};
const PostPostR = async (req, res, next) => {
  const { userid } = req.body;
  const aw = await service1.PostPostR(userid);
  return await res.status(200).json({
    mensaje: 'send ok datos correctos.',
    data: aw,
  });
};
//usuarios por id
const GetSeleccion = async (req, res, next) => {
  let { id } = req.params;
  const c = await service1.SeleccionM(id);
  return await res.status(200).json({
    mensaje: 'send ok datos correctos.',
    data: c,
  });
};
const PatchSeleccion = async (req, res, next) => {
  const { id } = req.body;
  const { date, status, userid } = req.body;
  //validacion de datos
  const Valida = await service1.SeleccionM(id);
  if (!Valida) {
    return res.status(404).json({
      status: 'error',
      mensaje: `id Buscado no existe ${id}`,
    });
  }
  const complete = await service1.ActualizarCampos(Valida, {
    date,
    status,
    userid,
  });
  return await res.status(200).json({
    mensaje: 'send ok datos correctos.',
    data: complete,
  });
};
const DeleteSeleccion = async (req, res, next) => {
  return await res.status(200).json({
    mensaje: 'send ok datos correctos.',
  });
};

module.exports = {
  GetShowR,
  PostPostR,
  GetSeleccion,
  PatchSeleccion,
  DeleteSeleccion,
};
