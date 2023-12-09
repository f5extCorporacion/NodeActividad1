const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/api/v1', require('./routes/index.js'));
//https://freckle-wisteria-4f2.notion.site/INICIO-PETCLINIC-VALIDACIONES-ZOD-83461a6c9ba84baaae06153ecdf56027
module.exports = app;
