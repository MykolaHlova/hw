const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const findall = await userService.findAllUsers();

        res.json(findall);
    } catch (e) {
        res.status(400).json(e.message)
    }
};