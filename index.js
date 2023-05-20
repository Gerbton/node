const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let test = 20;
    console.log('cagadinha');
    res.send('<h1>Bem vindo ao meu site!</h1>');
});

app.get('/blog', (req, res) => {
    res.send('<h1>Bem vindo ao meu blog!</h1>');
});

app.get('/canal/youtube', (req, res) => {
    res.send('<h1>Bem vindo ao meu canal teste teste!</h1>');
});

app.listen(3000, (error) => {
    if (error) {
        console.log('Ocorreu um erro');
    } else {
        console.log('Servidor iniciado com sucesso');
    }
});