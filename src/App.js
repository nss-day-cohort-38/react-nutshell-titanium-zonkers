import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar/NavBar";
import ApplicationViews from './components/ApplicationView';

function App() {
  return (
    <Router>
      <NavBar/>
      <ApplicationViews />
    </Router>
    
  );
}

export default App;
