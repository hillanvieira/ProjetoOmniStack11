const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const app = express();


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELET: Deletar uma onformação no back-end
 */
/**
 * Tipos de parâmetros:
 * Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: parametros Utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */
/**
 * Databases exemplo
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL:MongoDB, CouchDB e etc
 * 
 */

 /**
  * metodos requisição banc de dados sql Exemplo
  * DRIVE: SELECT * FROM users
  * Query Builder: table('users').select('*').whewre()
  */
 
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);