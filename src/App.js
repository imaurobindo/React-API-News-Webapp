
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <NavBar />

          <Switch>

            <Route exact path="/">
              <News key="General" pageSize={30} country="in" category="General" />
            </Route>
            <Route exact path="/Business">
              <News key="Business" pageSize={15} country="in" category="Business" />
            </Route>
            <Route exact path="/Entertainment">
              <News key="Entertainment" pageSize={15} country="in" category="Entertainment" />
            </Route>
            <Route exact path="/Sports">
              <News key="Sports" pageSize={15} country="in" category="Sports" />
            </Route>
            <Route exact path="/Health">
              <News key="Health" pageSize={15} country="in" category="Health" />
            </Route>
            <Route exact path="/Science">
              <News key="Science" pageSize={15} country="in" category="Science" />
            </Route>
            <Route exact path="/Technology">
              <News key="Technology" pageSize={15} country="in" category="Technology" />
            </Route>

          </Switch>
        </Router>


      </div>


    )
  }
}

