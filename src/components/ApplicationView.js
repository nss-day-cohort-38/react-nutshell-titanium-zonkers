import React from "react";
import { Route } from "react-router-dom";
import "./ApplicationView.css"
import LoginPage from "./auth/Auth"

const ApplicationViews = () => {
  return (
    <div id="application-views-container">
      <Route
        exact
        path="/"
        render={props =>
          sessionStorage.getItem('userId') === null
            ? <LoginPage {...props}/>
            : <h1>This is Home</h1>
        }
      />
    </div>
  );
};

export default ApplicationViews;