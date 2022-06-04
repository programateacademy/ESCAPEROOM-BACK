import { Schema, model } from "mongoose";

const questionSchema = new Schema({
  question_number: Number,
  group: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array,
  tips: Array,
}, {
  timestamps: true,
  versionKey: false
});

export default model("Question", questionSchema)