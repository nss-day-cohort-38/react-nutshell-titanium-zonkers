import React from "react";
import { Route } from "react-router-dom";
import "./ApplicationView.css"
import LoginPage from "./auth/Auth"

import NewsArticleList from './news/NewsArticleList';
import NewsArticleForm from './news/NewsArticleForm';

const ApplicationViews = (props) => {
  return (
    <div id="application-views-container">
      <Route
        exact
        path="/"
        render={props =>
          <h1>This is Home</h1>
          sessionStorage.getItem('userId') === null
            ? <LoginPage {...props}/>
            : <h1>This is Home</h1>
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
      <Route
        exact
        path="/news/new"
        render={() => {
          return <NewsArticleForm />
        }}
      >
      </Route>
    </div>
  );
};

export default ApplicationViews;