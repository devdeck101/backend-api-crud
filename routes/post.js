const {
  findAllPosts,
  deletePost,
  updatePost,
  createPost,
} = require("../controler/post");

const express = require("express");

const postsRouter = express.Router();

postsRouter.get("", findAllPosts);

postsRouter.post("", createPost);

postsRouter.delete("/:id", deletePost);

postsRouter.put("/:id", updatePost);

module.exports = postsRouter;
