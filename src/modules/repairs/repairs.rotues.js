const express = require('express');
const {
  GetShowR,
  PostPostR,
  GetSeleccion,
  PatchSeleccion,
  DeleteSeleccion,
} = require('./repairs.controller.js');

const router2 = express.Router();

//rutas de creacion
router2.get('/rtodos', GetShowR);
router2.post('/rcreat', PostPostR);
//rutas con id
router2.get('/rseleccion/:id', GetSeleccion);
router2.patch('/ractualiza/:id', PatchSeleccion);
router2.delete('/ractualiza:id', DeleteSeleccion);

module.exports = router2;
