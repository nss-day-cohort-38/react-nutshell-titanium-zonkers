import React from "react";
import { Route } from "react-router-dom";
import "./ApplicationView.css"
import LoginPage from "./auth/Auth"

import NewsArticleList from './news/NewsArticleList';
import NewsArticleForm from './news/NewsArticleForm';
import NewsArticleEditForm from './news/NewsArticleEditForm';

const ApplicationViews = (props) => {
  return (
    <div id="application-views-container">
      <Route
        exact
        path="/"
        render={props =>
          sessionStorage.getItem('userId') === null
            ? <LoginPage {...props} />
            : <h1>This is Home</h1>
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
    </div>
  );
};

export default ApplicationViews;