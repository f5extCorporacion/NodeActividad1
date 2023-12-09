const express = require('express');
const { router } = require('./../modules/users/user.route');
const router2 = require('./../modules/repairs/repairs.rotues');
const routerr = express.Router();
//rutas de midlewares
routerr.use('/users', router);
routerr.use('/repairs', router2);
module.exports = routerr;
