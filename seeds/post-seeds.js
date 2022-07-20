

const { Post } = require('../models');

const postData = [
  {
    title: 'Robot',
    description: 'a robot that runs on a app and pours alcahol',
    price: 400,
    user_id: 2,
    category_id: 1
  },
  {
    title: 'Lambo',
    description: '2021 lambo, runs like new',
    price: 400000,
    user_id: 3,
    category_id: 4
  },
  {
    title: 'Car Buffer',
    description: 'adams 15mm long throw swirl killer. like new, only used twice. Retails $280',
    price: 180,
    user_id: 1,
    category_id: 3
  },
  {
    title: 'Washer/ Dryer set',
    description: 'Maytag washer and dryer combo',
    price: 200,
    user_id: 5,
    category_id: 2
  },
  {
    title: 'Gaming pc/ complete set up',
    description: 'Great gaming pc. only had for 2 years. I dont have time to play anymore.',
    price: 2000,
    user_id: 4,
    category_id: 1
  },

] 

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;