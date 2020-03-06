import React from "react";
import { Route } from "react-router-dom";
import "./ApplicationView.css"

import EventList from "./events/EventList"
// import {} from "react-router-dom";

const ApplicationViews = () => {
  return (
    <div id="application-views-container">
      <Route
        exact
        path="/"
        render={props =>
         <h1>This is Home</h1>
        }
      />
      <Route
        exact
        path="/events"
        render={props =>
         <EventList />
        }
      />
    </div>
  );
};

export default ApplicationViews;