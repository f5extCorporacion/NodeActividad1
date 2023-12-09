const express = require('express');
const {
  PostCreate,
  Readget,
  ReadLeer,
  UpdateActualizar,
  DeleteEliminar,
} = require('./user.controller.js');
const router = express.Router();
//Rutas de creación users
router.post('/create', PostCreate);
router.get('/Alldata', Readget);
//users
router.get('/selectId/:id', ReadLeer);
router.patch('/ActualizarId/:id', UpdateActualizar);
router.delete('/EliminarId/:id', DeleteEliminar);
//Estos para metros  se consultan por id

module.exports = { router };
