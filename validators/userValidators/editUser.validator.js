module.exports = userObject => {
    const {email, name, password} = userObject;

    if (!name || !email || !password) {
        throw new Error('User object is not valid')
    }
};