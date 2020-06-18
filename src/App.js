import './App.css'
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Setup from "./pages/lectures/Setup";
import PythonMisc from "./pages/lectures/PythonMisc";

export default function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/python_misc">
          <PythonMisc />
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