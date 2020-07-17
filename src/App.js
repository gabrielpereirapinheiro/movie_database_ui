import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

//Routes
import HomePage from './containers/HomePage/HomePage'

class App extends Component {

  componentDidMount() {
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
