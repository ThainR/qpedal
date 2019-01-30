import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './Btn.js'
import Nav from './Nav.js'
import Login from './Login.js'
import Home from './Home.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Login/>

            <hr />

            <Route path="/home" exact component={Home} />


          </div>
        </Router>
    </div>
    );
  }
}

export default App;
