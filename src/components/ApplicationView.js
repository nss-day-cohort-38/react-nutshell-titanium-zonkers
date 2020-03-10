import React from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import "./ApplicationView.css";
import EventList from "./events/EventList";
import LoginPage from "./auth/Auth";
import Home from "./home/Home";
import NewsArticleList from "./news/NewsArticleList";
import SettingsList from "./settings/SettingsList";
import FriendsList from './friends/FriendsList'

const ApplicationViews = props => {
  let history = useHistory();
  window.addEventListener("storage", () => {
    sessionStorage.removeItem("userId");

    history.push("/");
  });

  return (
    <div id="application-views-container">
      <Switch>
        <Route
          exact
          path="/"
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <LoginPage {...props} />
            ) : (
              <Home />
            )
          }
        />

        <Route
          exact
          path="/events"
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <Redirect exact to="/" />
            ) : (
              <EventList />
            )
          }
        />
        <Route
          exact
          path="/friends"
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <Redirect exact to="/" />
            ) : (
              <FriendsList />
            )
          }
        />
        <Route
          exact
          path="/newsArticles"
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <Redirect exact to="/" />
            ) : (
              <NewsArticleList {...props} />
            )
          }
        ></Route>
        <Route
          exact
          path="/settings"
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <Redirect exact to="/" />
            ) : (
              <SettingsList {...props} />
            )
          }
        ></Route>
        
        

        <Route render={props => <Redirect exact to="/" />} />
      </Switch>
    </div>
  );
};

export default ApplicationViews;
