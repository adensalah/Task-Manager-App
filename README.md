
# 📝 Task Manager App  
A full-stack task management application built with **React (frontend)**, **Node.js + Express (backend)**, and **MySQL (database)**.  

<img width="733" alt="Capture_taskmanager" src="https://github.com/user-attachments/assets/7a3ca0c7-1fa8-44fc-b3f3-63b5d9fd6fe0" />


## 🌟 Features  
- **Add, delete, and mark tasks as complete**  
- **Real-time updates**  
- **MySQL database integration** (CRUD operations)  
- **Clean, responsive UI**  

## 🛠️ Tech Stack  
| **Layer**       | **Tech**                     |  
|----------------|-----------------------------|  
| **Frontend**   | React, Axios, CSS           |  
| **Backend**    | Node.js, Express            |  
| **Database**   | MySQL                       |  

## 🚀 Setup Guide  

### **1. Backend (Node.js + MySQL)**  
#### Prerequisites:  
- MySQL installed and running ([Download MySQL](https://dev.mysql.com/downloads/))  
- Node.js (v14+)  

#### Steps:  
1. **Clone the repo**  
   ```bash
   git clone https://github.com/adensalah/Task-Manager-App.git
   cd task-manager/backend
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up MySQL database**  
   - Open MySQL Workbench and run:  
     ```sql
     CREATE DATABASE taskmanager;
     USE taskmanager;
     CREATE TABLE tasks (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       completed BOOLEAN DEFAULT FALSE
     );
     ```

4. **Configure database credentials**  
   Edit `server.js` with your MySQL username/password:  
   ```javascript
   const pool = mysql.createPool({
     host: 'localhost',
     user: 'your-username', // e.g., 'root'
     password: 'your-password',
     database: 'taskmanager'
   });
   ```

5. **Start the server**  
   ```bash
   node server.js
   ```
   *(Runs on `http://localhost:5000`)*  

---

### **2. Frontend (React)**  
1. Navigate to the frontend folder:  
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the app**  
   ```bash
   npm start
   ```
   *(Opens `http://localhost:3000` in your browser)*  

---

## 📂 Project Structure  
```
task-manager/
├── backend/
│   ├── server.js           # Express + MySQL API
│   ├── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Styles
│   ├── package.json
```

## 🔧 Troubleshooting  
- **MySQL connection errors**:  
  - Verify your credentials in `server.js`.  
  - Ensure MySQL service is running (`sudo service mysql start` on Linux).  

- **CORS issues**:  
  - Double-check the backend URL in `App.js` (should match your server’s port).  

## 📜 License  
MIT  

---
Let me know if you’d like to add more (e.g., deployment instructions, API docs). 😊
