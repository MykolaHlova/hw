const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const query = `SELECT * FROM house`;
        const [ findAllHouse ] = await provider.promise().query(query);

        if (!findAllHouse.length) {
            throw new Error('House undefined')
        }

        req.houses = findAllHouse;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};