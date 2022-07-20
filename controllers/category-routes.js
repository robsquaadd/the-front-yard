const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Category } = require('../models');

// get all categories for homepage
router.get('/', (req, res) => {
  console.log('======================');
    Category.findAll({
    attributes: [
      'id',
      'category_name',
    ],
    include: [
      {
        model: Post,
        attributes: [  'id',
        'title',
        'description',
        'price',
        'created_at',],
        include: [   {
            model: User,
            attributes: ['username', 'email']
          }]
      },
   
    ]
  })
    .then(dbCategoryData => {
      const categories = dbCategoryData.map(category => category.get({ plain: true }));

      res.render('home', {
        categories,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single categories
router.get('/categories/:id', (req, res) => {
    Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name'
    ],
    include: [
        {
          model: Post,
          attributes: [  'id',
          'title',
          'description',
          'price',
          'created_at',],
          include: [   {
              model: User,
              attributes: ['username', 'email']
            }]
        },
     
      ]
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No categories found' });
        return;
      }

      const category = dbCategoryData.get({ plain: true });

      res.render('single-post', {
        category,
      
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;