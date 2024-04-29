const asyncHandler = require("express-async-handler");
const PostModel = require("../../models/PostModel.js");
const mongoose = require("mongoose");
const User = require("../../models/Users.js");

const createPost = asyncHandler(async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

const getPost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

const updatePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action Forbidden!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const deletePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).send({
        success: true,
        message: "Post deleted successfully!",
      });
    } else {
      res.status(403).json("Action Forbidden!");
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while deleting post!",
    });
  }
});

const deletePostByAdmin = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    await post.deleteOne();
    res.status(200).send({
      success: true,
      message: "Post deleted successfully!",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while deleting post!",
    });
  }
});

const LikePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post DisLiked!");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const CommentPost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { userId, username } = req.body;
  const comment = { text: req.body.text, userId, username };
  try {
    const post = await PostModel.findById(id);
    await post.updateOne({ $push: { comments: comment } });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
});

const getTimeLinePosts = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserPosts = await PostModel.find({ userId: userId });
    const followingPosts = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
  deletePostByAdmin,
  LikePost,
  CommentPost,
  getTimeLinePosts,
};
