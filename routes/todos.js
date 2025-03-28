const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single todo
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a todo
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
      completed: req.body.completed || false
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { 
        text: req.body.text,
        completed: req.body.completed
      },
      { new: true }
    );
    
    if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 