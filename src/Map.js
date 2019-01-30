import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import Nav from "./Nav.js"


class Map extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <h1>YOYO ITS ME THE MAP</h1>
      </div>
    )
  }
}

export default withRouter(Map)
