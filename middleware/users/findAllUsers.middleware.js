const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const query = `SELECT * FROM user`;
        const [ findAllUsers ] = await provider.promise().query(query);

        if (!findAllUsers.length) {
            throw new Error('User undefined')
        }

        req.users = findAllUsers;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};