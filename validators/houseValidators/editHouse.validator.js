module.exports = houseObject => {
    const {square, city, street, price} = houseObject;

    if (!square || !city || !street || !price) {
        throw new Error('Edit house is not valid')
    }
};