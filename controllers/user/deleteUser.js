const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {user_id} = req.params;

        await userService.deleteUser(user_id);

        res.json(`Ok. user is deleted.`);
    } catch (e) {
        res.json(e.message)
    }
};