import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Home />

        <Project />
        <Contact />
      </Router>
    </>
  );
}
