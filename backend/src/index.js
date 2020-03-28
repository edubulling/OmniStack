const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * metodo http:
 * 
 * GET: busca uma informação no back-end
 * POST: cria uma informação no back-end
 * PUT: altera uma informação no back-end
 * DELETE: deleta uma informação no back-end
 */

 /**
  * 
  */

app.listen(3333);

