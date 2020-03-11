import React from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import "./ApplicationView.css"
import EventList from "./events/EventList"
import LoginPage from "./auth/Auth"
import Home from "./home/Home"
import NewsArticleList from './news/NewsArticleList';
import MessagesMain from "./messages/MessageMain";
import SettingsList from './settings/SettingsList';


const ApplicationViews = ({props, setIsActiveUser}) => {
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
              <LoginPage {...props} setIsActiveUser={setIsActiveUser}/>
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
          path="/newsArticles"
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <Redirect exact to="/" />
            ) : (
              <NewsArticleList {...props} />
            )
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
