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

//Lorsqu'on essaye d'ajouter une tache
app.post('/addTask', (request, response) => {
    const task = request.body.task;
    if (task.trim() !== '') {
        tasks.push(task);
        response.render('home.ejs', { tasks, successMessage: 'Ajout réussi', errorMessage: null });
    } 
    else {
        response.render('home.ejs', { tasks, successMessage: null, errorMessage: 'Complétez la tâche' });
    }
});

// Supprimer une tâche
app.get('/delete', (request, response) => {
    const task = request.query.task;
    tasks = tasks.filter(t => t !== task); //tout ce qui est diff de la tache a sup, il garde 
    response.redirect('/');
  });
  
app.get('/', (request, response) => {
    response.redirect('/');
  });

app.listen(1000, () => {
    console.log('Server is running on port 80');
});