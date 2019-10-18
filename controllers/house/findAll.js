const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const findAll = await houseService.findAllHouses();

        res.json(findAll);
    } catch (e) {
        res.status(400).json(e.message)
    }
};