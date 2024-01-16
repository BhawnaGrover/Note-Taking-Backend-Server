const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {type: String, required: true},
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    todos: [todoSchema], // Array of todos
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
