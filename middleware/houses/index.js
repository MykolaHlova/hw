const isHousePresentMiddleware = require('./isHousePresent.middleware');
const checkNewHouseValidityMiddleware = require('./checkNewHouseValidity.middleware');
const checkEditHouseValidityMiddleware = require('./checkEditHouseValidity.middleware');

module.exports = {
    isHousePresentMiddleware,
    checkNewHouseValidityMiddleware,
    checkEditHouseValidityMiddleware
};
