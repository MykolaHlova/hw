const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();
const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let {render} = require('./controllers');
let {userRouter, houseRouter, authRouter} = require('./routers');

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/houses', houseRouter);

app.get('/', render.main);
app.get('/register', render.register);
app.get('/login', render.login);
app.get('/editUserPages', render.editUserPages);
app.get('/houses', render.houses);
app.get('/editHousePages', render.editHousePages);
app.all('*', render.error);

app.listen(3000, () => {
    console.log('3000');
});
