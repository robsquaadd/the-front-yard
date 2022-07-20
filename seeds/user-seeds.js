const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {   
        username: 'Bradley',
        email: 'bradley@gmail.com',
        password: 'password123'
      },
      {
        username: 'Robert',
        email: 'robert@gmail.com',
        password: 'password123'
      },
      {
        username: 'Moises',
        email: 'moises@gmail.com',
        password: 'password123'
      },
      {
        username: 'Michael',
        email: 'michael@gmail.com',
        password: 'password123'
      },
      {
        username: 'Nicholas',
        email: 'nicholas@gmail.com',
        password: 'password123'
      },
]


const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;