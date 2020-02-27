import React, {Component} from "react";

import {Link} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";

import Button from "@material-ui/core/Button";

class Navbar extends Component {
    render() {
      return (
        <AppBar>
          <Toolbar className ='nav-container'>
            <Button color="inherit" component = {Link} to ='/home'> Home </Button>
            <Button color="red" component = {Link} to = '/about'> About </Button>
            <Button color="red" component = {Link} to = '/projects'> Projects </Button>
            <Button color="red" component = {Link} to = '/blog'> Blog </Button>
          </Toolbar>
        </AppBar>
      );
    }
  }
  
  export default Navbar;