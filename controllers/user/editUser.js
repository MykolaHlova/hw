const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {
        const {id , name, email, password} = req.body;
        const query = `UPDATE user SET name = ?, email = ?, password = ? WHERE id = ${id}`;

        await provider.promise().query(query, [name, email, password]);

        res.render('editUser')
    } catch (e) {
        res.status(400).json(e.message);
    }
};
