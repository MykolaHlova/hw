module.exports = houseObject => {
    const { id, square, city, street, price } = houseObject;

    if (!id || !square || !city || !street || !price) {
        throw new Error('Edit house is not valid')
    }
};