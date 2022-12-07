var express = require("express");
var router = express.Router();
var config = require("dotenv").config();
var Post = require("../models/post");
var httpStatus = require("../config/httpStatus");

/* List posts */
router.get("/", (req, res, next) => {
  try {
    Post.find((error, posts) => {
      if (error) {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      } else {
        res.status(httpStatus.OK).json({ posts });
      }
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
});

/* Create new post */
router.post("/", (req, res, next) => {
  try {
    const { title, description } = req.body;

    const aPost = Post();
    aPost.title = title;
    aPost.description = description;

    aPost.save((error, post) => {
      if (error) {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      } else {
        res.status(httpStatus.OK).json({ post });
      }
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
});

module.exports = router;
