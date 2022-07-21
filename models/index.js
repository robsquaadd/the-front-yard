const User = require('./Users');
const Post = require('./Post');
const Category = require('./Categories')

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Category.hasMany(Post, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

Post.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
})





module.exports = { User, Post, Category };