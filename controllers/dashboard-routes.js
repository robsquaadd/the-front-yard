const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Category } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get("/", (req, res) => {
  console.log(req.session);
  console.log("======================");
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "image", "title", "description", "price", "created_at"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: User,
        attributes: ["username", "email"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      
      res.render("dashboard", {
        posts,
        loggedIn: req.session.loggedIn,
        dashboard: true
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: ["id", "image", "title", "description", "price", "created_at"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: User,
        attributes: ["username", "email"],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

