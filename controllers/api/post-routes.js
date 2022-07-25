const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Category } = require("../../models");
const withAuth = require("../../utils/auth");

// get all posts
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: ["id", "image", "title", "description", "price", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username", "email"],
      },
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "image", "title", "description", "price", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username", "email"],
      },
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // let imageFile;
  // let uploadPath;

  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).send("No images were uploaded.");
  // }

  // imageFile = req.files.imageFile;
  // uploadPath = __dirname + "/uploads/" + imageFile.name;

  // imageFile.mv(uploadPath, function (err) {
  //   if (err) return res.status(500).send(err);
  //   res.send("image uploaded");
  // });

  Post.create({
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    user_id: req.session.user_id,
    category_id: req.body.category_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category_id: req.body.category_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
