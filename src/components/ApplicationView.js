import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./ApplicationView.css"
import {} from "react-router-dom";

const ApplicationViews = ({}) => {
  return (
    <div id="application-views-container">
      <Route
        exact
        path="/home"
        render={props =>
         <h1>This is Home</h1>
        }
      />
    </div>
  );
};

export default ApplicationViews;