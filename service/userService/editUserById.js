const dataBase = require('../../dataBase').getInstance();

module.exports = async (editData, user_id) => {
    const UserModel = dataBase.getModel('User');

    await UserModel.update(editData, {
        where: {
            id: user_id
        }
    })
};