module.exports = userObject => {
    const {id, email, name, password} = userObject;

    if (!id || !name || !email || !password) {
        throw new Error('User object is not valid')
    }
};