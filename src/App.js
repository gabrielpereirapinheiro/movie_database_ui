import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

//Routes
import HomePage from './containers/HomePage/HomePage';
import LandingPage from './containers/LandingPage/LandingPage';
import Login from './containers/Login/Login';

const App = props => {
  let routes = (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div>
      {routes}
    </div>
  );
};

export default App;
