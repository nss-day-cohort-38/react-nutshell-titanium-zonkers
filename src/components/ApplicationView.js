import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./ApplicationView.css"
import EventList from "./events/EventList"
import LoginPage from "./auth/Auth"
import Home from "./home/Home"
import NewsArticleList from './news/NewsArticleList';
import MessagesMain from "./messages/MessageMain";


const ApplicationViews = (props) => {
  return (
    <div id="application-views-container">
      <Switch>
        <Route
          exact
          path="/"
          render={props =>
            sessionStorage.getItem('userId') === null
              ? <LoginPage {...props} />
              : <Home />
          }
        />
        <Route
          exact
          path="/events"
          render={props =>
            sessionStorage.getItem('userId') === null
              ? <Redirect exact to="/" />
              : <EventList />
          }
        />
        <Route
          exact
          path="/newsArticles"
          render={(props) => 
            sessionStorage.getItem("userId") === null 
            ? <Redirect exact to="/" />
            : <NewsArticleList
              {...props} />
          }
        />
        <Route
          exact
          path="/messages"
          render={(props) => 
            sessionStorage.getItem("userId") === null 
            ? <Redirect exact to="/" />
            : <MessagesMain
              {...props} />
          }
        />
        <Route component={Home} />
      </Switch>
    </div>
  );
};

export default ApplicationViews;