const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const { city, street, square, price } = req.body;
        const query = `INSERT INTO house(city, street, square, price) VALUES(?, ?, ?, ?)`;

        await provider.promise().query(query, [city, street, square, price]);

        res.render('house')
    }catch (e) {
        res.json(e.message)
    }
};
