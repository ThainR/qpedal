import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './Btn.js'
import Nav from './Nav.js'
import Login from './Login.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Heyyy</h1>
      </div>
    );
  }
}

export default Home;
