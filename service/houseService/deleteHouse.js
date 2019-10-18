const dataBase = require('../../dataBase').getInstance();

module.exports = async house_id => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.destory({
        where: {
            id: house_id
        }
    })
};