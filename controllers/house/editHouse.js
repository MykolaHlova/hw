const { provider } = require('../../database');

module.exports = async (req, res) => {
    try {
        const  { id, square, city, price, street } = req.body;
        const query = `UPDATE house SET square = ?, city = ?, price = ?, street = ? WHERE id = ${id}`;

        await provider.promise().query(query, [square, city, price, street]);

        res.render('editHouse');
    } catch (e) {
        res.status(400).json(e.message);
    }
};