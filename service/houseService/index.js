const createHouse = require('./createHouse');
const deleteHouse = require('./deleteHouse');
const findAllHouses = require('./findAllHouses');
const getAllHousesByUserId = require('./getAllHousesByUserId');
const getHouseById = require('./getHouseById');
const editHouseById = require('./editHouseById');

module.exports = {
    createHouse,
    deleteHouse,
    findAllHouses,
    getAllHousesByUserId,
    getHouseById,
    editHouseById
};