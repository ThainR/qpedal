// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu, Sticky, Rail } from 'semantic-ui-react'
import {withRouter, Redirect} from "react-router-dom";

class Nav extends Component {
  // static propTypes = {
  //   color: PropTypes.string,
  // }


  state = { activeItem: '' }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { contextRef } = this.state
    // const { color } = this.props
    const { activeItem } = this.state

    if (activeItem === "map") {
      return <Redirect to='/map' />
    }

    if (activeItem === "account") {
      return <Redirect to='/account' />
    }

    if (activeItem === "home") {
      return <Redirect to='/home' />
    }


    return (
      <Rail
        internal
        position="left"
        attached
        style={{ top: "auto", height: "auto", width: "100%" }}
      >
        <Sticky context={contextRef} >
          <Menu widths={3} attached="bottom">
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='map'
              active={activeItem === 'map'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='account'
              active={activeItem === 'account'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Sticky>
      </Rail>
    )
  }
}

export default withRouter(Nav)
