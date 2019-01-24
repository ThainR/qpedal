import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './Btn.js'
import Nav from './Nav.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/nav">Nav</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
            </ul>

            <hr />

            <Route path="/nav" component={Nav} />
            <Route path="/button" component={ButtonExampleButton} />

          </div>
        </Router>
    </div>
    );
  }
}

export default App;
