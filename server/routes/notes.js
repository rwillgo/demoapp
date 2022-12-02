var express = require("express");
var router = express.Router();
var config = require("dotenv").config();
var Post = require("../models/post");
var httpStatus = require("../config/httpStatus");

/* GET notes listing. */
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(httpStatus.OK).json({ posts });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
});

/* POST create new note. */
router.post("/new", async (req, res, next) => {
  try {
    const { title, description } = req.body;
    
    const aPost = Post();
    aPost.title = title;
    aPost.description = description;

    aPost.save((error, doc) => {
      if (error) {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      } else {
        res.status(httpStatus.OK).json({ post: doc });
      }
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
});

module.exports = router;
