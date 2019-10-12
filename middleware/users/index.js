const isUserPresentMiddleware = require('./isUserPresent.middleware');
const isEditUserPresentMiddleware = require('./isEditUserPresent.middleware');
const checkUserValidityMiddleware = require('./checkUserValidity.middleware');
const checkEditUserValidityMiddleware = require('./checkEditUserValidity.middleware');
const checkExistUserMiddleware = require('./checkExistUser.middleware');
const findAllUsersMiddleware = require('./findAllUsers.middleware');

module.exports = {
    isUserPresentMiddleware,
    isEditUserPresentMiddleware,
    checkUserValidityMiddleware,
    checkEditUserValidityMiddleware,
    checkExistUserMiddleware,
    findAllUsersMiddleware
};
