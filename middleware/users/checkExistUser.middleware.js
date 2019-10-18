const {authService} = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const userExist = await authService.authService(email, password);

        if (!userExist) {
            throw new Error(`Email : ${email} incorrect`)
        }

        req.user = userExist;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};