import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from "js-cookie";

//Routes
import HomePage from './containers/HomePage/HomePage';
import LandingPage from './containers/LandingPage/LandingPage';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';

const App = props => {
  let token = Cookies.get('token');
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/logout" exact component={Logout} />
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <div>
      {routes}
    </div>
  );
};

export default App;
