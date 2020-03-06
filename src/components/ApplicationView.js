import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./ApplicationView.css"
import EventList from "./events/EventList"
import LoginPage from "./auth/Auth"
import Home from "./home/Home"

import NewsArticleList from './news/NewsArticleList';
import NewsArticleForm from './news/NewsArticleForm';
import NewsArticleEditForm from './news/NewsArticleEditForm';

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
          render={(props) => {
            return <NewsArticleList
              {...props} />
          }}
        >
        </Route>
        <Route
          exact
          path="/newsArticles/new"
          render={(props) => {
            return <NewsArticleForm {...props} />
          }}
        >
        </Route>
        <Route
          exact
          path="/newsArticles/:newsArticleId(\d+)/edit"
          render={(props) => {
            return <NewsArticleEditForm {...props} />
          }}
        >
        </Route>
        <Route component={Home} />
      </Switch>
    </div>
  );
};

export default ApplicationViews;