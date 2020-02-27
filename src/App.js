import React, {Component} from "react";
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
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path = "/home" component = {home}/>
            <Route exact path = "/about" component = {about}/>
            <Route exact path = "/projects" component = {projects}/> 
            <Route exact path = "/blog" component = {blog}/>         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
