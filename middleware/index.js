const userMiddleware = require('./users');
const houseMiddleware = require('./houses');
const checkAccessTokenMiddleware = require('./checkAccessToken.middleware');


module.exports = {
    userMiddleware,
    houseMiddleware,
    checkAccessTokenMiddleware
};


