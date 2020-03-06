import React from "react";
import { Route, Redirect} from "react-router-dom";
import "./ApplicationView.css"
import EventList from "./events/EventList"
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
      <Route
        exact
        path="/events"
        render={props =>
          sessionStorage.getItem('userId') === null
          ? <Redirect exact to="/"/>
          : <EventList />
        }
      />
    </div>
  );
};

export default ApplicationViews;