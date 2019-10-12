const isHousePresentMiddleware = require('./isHousePresent.middleware');
const isEditHousePresentMiddleware = require('./isEditHousePresent.middleware');
const checkNewHouseValidityMiddleware = require('./checkNewHouseValidity.middleware');
const checkEditHouseValidityMiddleware = require('./checkEditHouseValidity.middleware');
const findAllHousesMiddleware = require('./findAllHouses.middleware');

module.exports = {
    isHousePresentMiddleware,
    isEditHousePresentMiddleware,
    checkNewHouseValidityMiddleware,
    checkEditHouseValidityMiddleware,
    findAllHousesMiddleware
};
