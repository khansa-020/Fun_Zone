const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    postedBy: {
      type: String,
      // required: true
    },
    desc: String,
    comment: String,
    likes: [],
    comments: [
      {
        text: String,
        username: String,
      },
    ],
    image: String,
    video: String,
    filename: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", postSchema);

module.exports = PostModel;
