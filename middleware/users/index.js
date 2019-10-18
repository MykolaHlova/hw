const isUserPresentMiddleware = require('./isUserPresent.middleware');
const isAuthUserPresentMiddleware = require('./isAuthUserPresent.middleware');
const checkUserValidityMiddleware = require('./checkUserValidity.middleware');
const checkEditUserValidityMiddleware = require('./checkEditUserValidity.middleware');
const checkExistUserMiddleware = require('./checkExistUser.middleware');

module.exports = {
    isUserPresentMiddleware,
    isAuthUserPresentMiddleware,
    checkUserValidityMiddleware,
    checkEditUserValidityMiddleware,
    checkExistUserMiddleware
};
