const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs( {
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));


const users = [];
const houses = [];

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/users', (req, res) => {
   res.json(users)
});

app.post('/client', (req, res) => {
   const user = req.body;

   user.user_id = users.length + 1;
   users.push(user);
   res.redirect('/users')
});

app.get('/login', (req, res) => {
   res.render('login')
});

app.post('/auth', (req, res) => {
   const {email, password} = req.body;
   const findedUsers = users.find(user => user.email === email && user.password === password);

   res.json(findedUsers);
});

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params;
    const findedUsers = users.find(user => user.user_id === +user_id);

    res.json(findedUsers);
});


app.get('/house', (req, res) => {
   res.render('house')
});

app.get('/houses', (req, res) => {
    res.json(houses)
});

app.post('/house', (req, res) => {
    const house = req.body;

    house.house_id = houses.length + 1;
    houses.push(house);

    res.redirect('/houses')
});

app.get('/houses/:house_id', (req, res) => {
    const {house_id} = req.params;
    const findedHouse = houses.find(house => house.house_id === +house_id);

    res.json(findedHouse)
});

app.all('*', (req, res) => {
    res.json('Error 404!!!')
});

app.listen(3000,()=>{
    console.log(3000);
});
