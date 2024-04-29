const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    postedBy: {
      type: String,
      // required: true
    },
    desc: {type:String},
    comment: {type:String},
    likes: [],
    comments: [
      {
        text: String,
        username: String,
      },
    ],
    image: {type:String},
    video: {type:String},
    filename: {type:String},
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", postSchema);

module.exports = PostModel;
