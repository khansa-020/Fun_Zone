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

router.post("/createpost", createPost);
router.get("/:id/getpost", getPost);
router.put("/:id/updatepost", updatePost);
router.delete("/:id/deletepost", deletePost);
router.delete("/deletepostbyadmin/:id", deletePostByAdmin);
router.put("/:id/like", LikePost);
router.put("/:id/comment", CommentPost);
router.get("/:id/timeline", getTimeLinePosts);

module.exports = router;
