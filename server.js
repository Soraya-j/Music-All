const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let tasks = [];

//Affiche le formulaire
app.get('/', (request, response) => {
    response.render('home.ejs', { tasks, successMessage: null, errorMessage: null });
});

// Route pour la page 'about'
app.get('/amisSession', (request, response) => {
    response.render('amisSession.ejs'); // Assurez-vous d'avoir un fichier 'about.ejs' dans votre dossier de vues
});

app.listen(80, () => {
    console.log('Server is running on port 80');
});