module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter city'
                },
                isAlpha: {
                    msg: 'Only allow letters'
                },
                len: {
                    args: 3,
                    msg: 'City must be at least 3 characters in length.'
                }
            }
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter street'
                },
                isAlpha: {
                    msg: 'Only allow letters'
                },
                len: {
                    args: 2,
                    msg: 'Street must be at least 2 characters in length.'
                }
            }
        },
        square: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter square metres'
                },
                isNumeric: {
                    msg: 'Only allow numbers'
                }
            }
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter price'
                },
                isNumeric: {
                    msg: 'Only allow numbers'
                }
            }
        }
    }, {
        tableName: 'house',
        timestamps: false
    });

    const User = sequelize.import('./User');
    House.belongsTo(User, {foreignKey: 'user_id'});

    return House;
};