module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: 'Wrong format email'
                },
                notNull: {
                    msg: 'Please enter your email'
                },
            }
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your name'
                },
                isAlpha: {
                    msg: 'Only allow letters'
                },
                len: {
                    args: 2,
                    msg: 'Name must be at least 2 characters in length.'
                }
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your password'
                },
                len: {
                    args: 6,
                    msg: 'Password must be at least 6 characters in length.'
                }
            }
        }
    }, {
        tableName: 'user',
        timestamps: false
    });
    return User;
};