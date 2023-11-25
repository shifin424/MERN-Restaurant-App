


// import Sequelize from 'sequelize';

// const sequelize = new Sequelize('restaurantDB', 'root', 'Shifin@123', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// sequelize.authenticate()
//   .then(() => {
//     console.log('Database connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// export default  sequelize

export default {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Shifin@123',
  DB: 'restaurantdb',
  dialect: 'mysql',

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};


