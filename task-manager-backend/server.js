const express = require('express');
const mysql = require('mysql2/promise'); // Use promises for async/await
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'taskmanager',
  waitForConnections: true,
  connectionLimit: 10,
});

// API Routes
app.get('/api/tasks', async (req, res) => {
  const [tasks] = await pool.query('SELECT * FROM tasks');
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;
  const [result] = await pool.query(
    'INSERT INTO tasks (title, completed) VALUES (?, ?)',
    [title, false]
  );
  const [newTask] = await pool.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
  res.status(201).json(newTask[0]);
});

app.put('/api/tasks/:id', async (req, res) => {
  const { completed } = req.body;
  await pool.query('UPDATE tasks SET completed = ? WHERE id = ?', [completed, req.params.id]);
  const [updatedTask] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
  res.json(updatedTask[0]);
});

app.delete('/api/tasks/:id', async (req, res) => {
  await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
  res.status(204).send();
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));