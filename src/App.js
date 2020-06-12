import './App.css'
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Setup from "./pages/lectures/Setup";

export default function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/setup">
          <Setup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}