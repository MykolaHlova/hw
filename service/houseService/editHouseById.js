const dataBase = require('../../dataBase').getInstance();

module.exports = async (editObject, house_id) => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.update(editObject, {
        where: {
            id: house_id
        }
    })
};