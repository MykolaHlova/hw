const isHousePresentMiddleware = require('./isHousePresent.middleware');
const isEditHousePresentMiddleware = require('./isEditHousePresent.middleware');
const checkNewHouseValidityMiddleware = require('./checkNewHouseValidity.middleware');
const checkEditHouseValidityMiddleware = require('./checkEditHouseValidity.middleware');

module.exports = {
    isHousePresentMiddleware,
    isEditHousePresentMiddleware,
    checkNewHouseValidityMiddleware,
    checkEditHouseValidityMiddleware
};
