import dbConfig from '../config/database.js'
import { Sequelize ,DataTypes } from 'sequelize';
import RestaurantModel from '../models/restaurant.js'

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Restaurant = RestaurantModel(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


export default db