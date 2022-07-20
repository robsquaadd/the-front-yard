const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
// const seedCategories = require('');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPost();
  console.log('--------------');

//   await seedCategories();
//   console.log('--------------');

  process.exit(0);
};

seedAll();