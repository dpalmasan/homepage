import './App.css'
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Setup from "./pages/lectures/Setup";
import PythonMisc from "./pages/lectures/PythonMisc";
import WeekOne from "./pages/lectures/WeekOne";
import WeekTwo from "./pages/lectures/WeekTwo";
import WeekThree from "./pages/lectures/WeekThree";
import WeekFour from "./pages/lectures/WeekFour";
import WeekFive from "./pages/data_science/WeekFive";
import WeekSix from "./pages/data_science/WeekSix";
import WeekSeven from "./pages/data_science/WeekSeven";
import WeekEight from "./pages/data_science/WeekEight";
import WeekNine from "./pages/data_science/WeekNine";
import WeekTen from "./pages/data_science/WeekTen";
import WeekEleven from "./pages/data_science/WeekEleven";
import WeekOneRepaso from "./pages/lectures/WeekOneRepaso";
import DataScience from "./pages/DataScience";


export default class App extends React.Component {

  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }

  render() {
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
          <Route path="/week1">
            <WeekOne />
          </Route>
          <Route path="/week2">
            <WeekTwo />
          </Route>
          <Route path="/week3">
            <WeekThree />
          </Route>
          <Route path="/week4">
            <WeekFour />
          </Route>
          <Route path="/week5">
            <WeekFive />
          </Route>
          <Route path="/week6">
            <WeekSix />
          </Route>
          <Route path="/week7">
            <WeekSeven />
          </Route>
          <Route path="/week8">
            <WeekEight />
          </Route>
          <Route path="/week9">
            <WeekNine />
          </Route>
          <Route path="/week10">
            <WeekTen />
          </Route>
          <Route path="/week11">
            <WeekEleven />
          </Route>
          <Route path="/week1_repaso">
            <WeekOneRepaso />
          </Route>
          <Route path="/data_science">
            <DataScience />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }

}