import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import Nav from "./Nav.js"

class Account extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <h1>YOYO ITS DA ACCOUNT AYYYYY</h1>
      </div>
    )
  }
}

export default withRouter(Account)
