require("dotenv").config();
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

let todos = [];

// Routes for Todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), ...req.body };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Listen to server
app.listen(3000, () => console.log("Server connected"));
