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

let { user, house, render } = require('./controllers');
let { userMiddleware, houseMiddleware } = require('./middleware');

//Main
app.get('/', render.main);

//Users
app.get('/register', render.register);
app.get('/login', render.login);
app.post('/users', userMiddleware.checkUserValidityMiddleware,user.createUser);
app.post('/auth', userMiddleware.checkExistUserMiddleware, user.auth);
app.get('/users/:user_id', userMiddleware.isUserPresentMiddleware, user.getById);
app.get('/users', userMiddleware.findAllUsersMiddleware, user.findAll);
app.get('/editUserPages', render.editUser);
app.post('/editUser', userMiddleware.checkEditUserValidityMiddleware, userMiddleware.isEditUserPresentMiddleware,user.editUser);

//House
app.get('/houses', render.house);
app.post('/houses', houseMiddleware.checkNewHouseValidityMiddleware,house.createHouse);
app.get('/houses/:house_id',houseMiddleware.isHousePresentMiddleware, house.getById);
app.get('/houses', houseMiddleware.findAllHousesMiddleware,house.findAll);
app.get('/editHousePages', render.editHouse);
app.post('/editHouse', houseMiddleware.checkEditHouseValidityMiddleware, houseMiddleware.isEditHousePresentMiddleware,house.editHouse);

//Error
app.all('*', render.error);

//Server_listener
app.listen(3000,()=>{
    console.log('3000_Listen');
});
