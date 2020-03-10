import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar/NavBar";
import ApplicationViews from './components/ApplicationView';
import TasksMain from "./components/tasks/TasksMain"

function App() {
  window.addEventListener('storage', () => {  
    sessionStorage.removeItem("userId");
  });


  return (
    <Router>
      <NavBar/>
      <ApplicationViews />
      <TasksMain />
    </Router>
    
  );
}

export default App;
