const dataBase = require('../../dataBase').getInstance();

module.exports = async userToCreate => {
    const UserModel = dataBase.getModel('User');

    const user = await UserModel.create(userToCreate);

    return user && user.dataValues;
};