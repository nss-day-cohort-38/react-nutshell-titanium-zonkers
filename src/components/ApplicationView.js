import React, { useState } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import "./ApplicationView.css";
import EventList from "./events/EventList";
import LoginPage from "./auth/Auth";
import Home from "./home/Home";
import NewsArticleList from "./news/NewsArticleList";
import SettingsList from "./settings/SettingsList";
import MessagesMain from "./messages/MessageMain";
import Profile from "./profile/Profile";
import FriendsList from "./friends/FriendsList";
import SearchUsers from "./friends/SearchUsers";

const ApplicationViews = ({ props, setIsActiveUser }) => {
  let history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
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
              <LoginPage {...props} setIsActiveUser={setIsActiveUser} />
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
              <EventList userId={Number(sessionStorage.getItem("userId"))}/>
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
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <Redirect exact to="/" />
            ) : (
              <MessagesMain {...props} />
            )
          }
        />
        <Route
          exact
          path="/users"
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <Redirect exact to="/" />
            ) : (
              <>
                <SearchUsers
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />{" "}
                <FriendsList
                  searchQuery={searchQuery}
                  showAll={true}
                  {...props}
                />
              </>
            )
          }
        />

        <Route
          exact
          path="/profile/:username"
          render={props =>
            sessionStorage.getItem("userId") === null ? (
              <Redirect exact to="/" />
            ) : (
              <Profile user={props.match.params.username} />
            )
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
