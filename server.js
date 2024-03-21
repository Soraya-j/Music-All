const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let tasks = [];


app.get('/', (request, response) => {
    response.render('home.ejs', { tasks, successMessage: null, errorMessage: null });
});

app.get('/amisSession', (request, response) => {
    response.render('amisSession.ejs'); 
});

app.get('/autreSession', (request, response) => {
    response.render('autreSession.ejs'); 
});

app.listen(80, () => {
    console.log('Server is running on port 80');
});