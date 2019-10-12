const { houseValidators } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const houses = req.body;

        houseValidators.editHouseValidator(houses);

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};