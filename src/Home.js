import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './Btn.js'
import Nav from './Nav.js'
import Login from './Login.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Button} from "semantic-ui-react";


class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <h1>YOU ARE HOME</h1>

      </div>
    );
  }
}

export default Home;
