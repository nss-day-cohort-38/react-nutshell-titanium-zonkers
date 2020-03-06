import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./ApplicationView.css"
import {} from "react-router-dom";
import LoginPage from "./auth/Auth"

const ApplicationViews = ({}) => {
  return (
    <div id="application-views-container">
      <Route
        exact
        path="/"
        render={props =>
          sessionStorage.getItem('user') === null
            ? <LoginPage {...props}/>
            : <h1>This is Home</h1>
        }
      />
    </div>
  );
};

export default ApplicationViews;