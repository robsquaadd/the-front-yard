const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
    
  },
  {
    category_name: 'Furniture',
    
  },
  {
    category_name: 'Tools',
    
  },
  {
    category_name: 'Vehicles',
    
  },
  {
    category_name: 'Miscellaneous',
    
  },


] 

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;