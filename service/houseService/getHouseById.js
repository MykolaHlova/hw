const dataBase = require('../../dataBase').getInstance();

module.exports = async id => {
    const HouseModule = dataBase.getModel('House');

    const house = await HouseModule.findByPk(id);

    return house && house.dataValues;
};