const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  objectives: [String],
  messages: [String],
  promotionalVideo: { type: String },
  image: { type: String },
  type: { type: String },
  contents: [{
    title: { type: String, required: true },
    lectures: [{
      title: { type: String, required: true },
      content: { type: String }, // Can be text, video URL, etc.
      quizzes: [{
        question: { type: String, required: true },
        options: [String],
        correctAnswer: { type: Number, required: true }
      }],
      assignments: [{
        question: { type: String, required: true },
        answer: { type: String, required: true }
      }],
      exercises: [String] // List of exercise URLs or content
    }]
  }],
  // Add more fields as needed
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
