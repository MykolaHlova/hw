const dataBase = require('../../dataBase').getInstance();

module.exports = async () => {
    const UserModel = dataBase.getModel('User');

    const allUsers =  await UserModel.findAll();

    return allUsers;
};