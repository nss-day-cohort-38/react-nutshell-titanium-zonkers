import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar/NavBar";
import ApplicationViews from './components/ApplicationView';
import TasksMain from "./components/tasks/TasksMain"

function App(props) {
  return (
    <Router>
      <NavBar/>
      <ApplicationViews {...props}/>
      <TasksMain />
    </Router>
    
  );
}

export default App;
