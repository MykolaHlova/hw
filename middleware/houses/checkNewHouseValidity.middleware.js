const  { houseValidator } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const houses = req.body;

        houseValidator.newHouseValidator(houses);

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};