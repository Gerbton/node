const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Question = require('./models/Question');

sequelize.authenticate().then(() => {
    console.log('Conexão feita com o banco de dados!');
}).catch((error) => {
    console.log(error);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/questions', (req, res) => {
    Question.findAll({raw: true}).then((questions) => {
        res.render('questions/index', {
            questions: questions,
            success: req.query.success ?? false
        });
    });
});

app.get('/questions/create', (req, res) => {
    res.render('questions/create', {
        success: req.query.success ?? false
    });
});

app.post('/questions/save', (req, res) => {
    let question = req.body.question;
    let description = req.body.description;

    Question.create({
        question: question,
        description: description
    }).then(() => {
        res.redirect('/questions?success=true');
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(3000, (error) => {
    if (error) {
        console.log('Ocorreu um erro');
    }
});