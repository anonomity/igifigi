import React, { Component } from "react";
import logo from "./images/logo.svg";
import "./App.css";
//Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//pages
import home from "./pages/home";
import about from "./pages/about";
import projects from "./pages/projects";
import blog from "./pages/blog";


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/about" component={about} />
            <Route exact path="/projects" component={projects} />
            <Route exact path="/blog" component={blog} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
