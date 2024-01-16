const express = require("express");
const TodoRouter = express.Router();
const User = require("../models/user.models");
const auth = require("../middlewares/auth"); // Assuming you have middleware for authentication

// Add a new todo for a user
TodoRouter.post("/add", auth, async (req, res) => {
  try {
    const { title, task } = req.body; // Add title here

    // Get the user ID from the authenticated user
    const userId = req.user.id;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the new todo to the user's list
    user.todos.push({ title, task }); // Add title here

    // Save the updated user with the new todo
    await user.save();

    res.json({ message: "Todo added successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
});

// Get all todos for a user
TodoRouter.get("/all", auth, async (req, res) => {
  try {
    // Get the user ID from the authenticated user
    const userId = req.user.id;

    // Find the user and populate the todos
    const user = await User.findById(userId).populate("todos");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ todos: user.todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
});

// Update a specific todo for a user
TodoRouter.put("/:todoId", auth, async (req, res) => {
    try {
      const todoId = req.params.todoId;
      const { title, task, completed } = req.body; // Add completed here
  
      // Get the user ID from the authenticated user
      const userId = req.user.id;
  
      // Find the user
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Find the todo in the user's todos array
      const todoToUpdate = user.todos.find(
        (todo) => todo._id.toString() === todoId
      );
      if (!todoToUpdate) {
        return res.status(404).json({ message: "Todo not found" });
      }
  
      // Update the todo properties
      if (title) todoToUpdate.title = title;
      if (task) todoToUpdate.task = task;
      if (completed !== undefined) todoToUpdate.completed = completed;
  
      // Save the updated user with the modified todo
      await user.save();
  
      res.json({ message: "Todo updated successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  });

// Delete a specific todo for a user
TodoRouter.delete("/:todoId", auth, async (req, res) => {
  try {
    const todoId = req.params.todoId;

    // Get the user ID from the authenticated user
    const userId = req.user.id;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the index of the todo in the user's todos array
    const todoIndex = user.todos.findIndex(
      (todo) => todo._id.toString() === todoId
    );
    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // Remove the todo from the user's todos array
    user.todos.splice(todoIndex, 1);

    // Save the updated user without the deleted todo
    await user.save();

    res.json({ message: "Todo deleted successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
});

module.exports = TodoRouter;
