module.exports = userObject => {
    const {name, email, password} = userObject;

    if (!name || !password || !email) {
        throw new Error('User object is not valid')
    }
};
