/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por executar a aplicação
 * Data: 15/10/2019
 * Author: Glaucia Lemos
 */

const express = require('express');
const path = require('path');

// ==> Inicializando a aplicação
const app = express();

// ==> Executando o View Engine - Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// ==> Rota principal da Aplicação
app.get('/', (req, res) =>{
    res.render('index');
});

// ==> Iniciando o servidor 
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000...');
});