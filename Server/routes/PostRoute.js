const express = require("express");
const {
  createPost,
  deletePost,
  getPost,
  getTimeLinePosts,
  LikePost,
  updatePost,
  CommentPost,
  deletePostByAdmin,
} = require("../controllers/users/PostController");

const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.delete("/deletepostbyadmin/:id", deletePostByAdmin);
router.put("/:id/like", LikePost);
router.put("/:id/comment", CommentPost);
router.get("/:id/timeline", getTimeLinePosts);

module.exports = router;
