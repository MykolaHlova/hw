module.exports = houseObject => {
    const {city, street, square, price} = houseObject;

    if (!city || !street || !square || !price) {
        throw new Error('Create house is not valid')
    }
};
