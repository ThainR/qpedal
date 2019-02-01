import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './Btn.js'
import Nav from './Nav.js'
import Login from './Login.js'
import Home from './Home.js'
import Map from './Map.js'
import Account from './Account.js'
import { BrowserRouter, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App"></div>

            <div>
              <Route path="/login" exact component={Login} />
              <Route path="/home" exact component={Home} />
              <Route path="/map" exact component={Map} />
              <Route path="/account" exact component={Account} />
            </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
