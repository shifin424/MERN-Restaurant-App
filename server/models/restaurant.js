// import Sequelize from 'sequelize';
//  import sequelize from '../config/database.js';



// const Restaurant = sequelize.define('restaurant', {
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     address: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     contact: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     imageUrl: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     publicId: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// export default Restaurant;


export default (sequelize, DataTypes) => {

    const Restaurant = sequelize.define("restaurant", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })

    return Restaurant

}
