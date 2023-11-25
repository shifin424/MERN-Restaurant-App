
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


