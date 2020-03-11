import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar/NavBar";
import ApplicationViews from './components/ApplicationView';
import TasksMain from "./components/tasks/TasksMain"

function App(props) {
  const [isActiveUser, setIsActiveUser] = useState()

  return (
    <Router>
      <NavBar setIsActiveUser={setIsActiveUser}/>
      <ApplicationViews {...props} setIsActiveUser={setIsActiveUser}/>
      <TasksMain isActiveUser={isActiveUser} setIsActiveUser={setIsActiveUser}/>
    </Router>
    
  );
}

export default App;
