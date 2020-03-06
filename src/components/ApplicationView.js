import React from "react";
import { Route } from "react-router-dom";
import "./ApplicationView.css"
import { } from "react-router-dom";

import NewsArticleList from './news/NewsArticleList';

const ApplicationViews = ({ }) => {
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
        path="/news"
        render={() => {
          return <NewsArticleList />
        }}
      >
      </Route>
    </div>
  );
};

export default ApplicationViews;