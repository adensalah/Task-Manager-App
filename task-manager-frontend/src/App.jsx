import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    const res = await axios.post('http://localhost:5000/api/tasks', { title: newTask });
    setTasks([...tasks, res.data]);
    setNewTask('');
  };

  const toggleTask = async (id) => {
    const task = tasks.find(t => t._id === id);
    const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !task.completed });
    setTasks(tasks.map(t => t._id === id ? res.data : t));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => toggleTask(task._id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;