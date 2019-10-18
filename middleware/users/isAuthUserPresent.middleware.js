const {authService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const {dataValues} = await authService.authService(email, password);

        req.user = dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};