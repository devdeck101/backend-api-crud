const Post = require("../model/post");

const findAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};

const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);
  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(id, req.body);
  const updatedPost = await Post.findById(id);
  res.status(200).json(updatedPost);
};

module.exports = {
  findAllPosts,
  createPost,
  deletePost,
  updatePost,
};
