/*Importar o módulo do framework Express: */
var express = require('express');

/*Importar o módulo do framework Consign: */
var consign = require('consign');

/*Importar o módulo do framework Body-parser: */
var bodyParser = require('body-parser');

/*Importar o módulo do framework Express-validator: */
var expressValidator = require('express-validator');

/*Iniciar o objeto do Express */
var app = express();

/*Setar variáveis 'view engine' e 'views' do Express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*Configurar o middleware express.static */
app.use(express.static('./app/public'));

/*Configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended : true}));

/*Configurar o middleware express-validator */
app.use(expressValidator());

/*Efetua o autoload das rotas, controllers e models do projeto para o objeto app */
consign()
    .include('app/models')
    .then('app/controllers')
    .then('app/routes')
    .into(app);

/*Exportar o objeto app */
module.exports = app;