// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'

class Nav extends Component {
  // static propTypes = {
  //   color: PropTypes.string,
  // }


  state = { activeItem: 'home' }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { contextRef } = this.state
    // const { color } = this.props
    const { activeItem } = this.state

    return (
      <Sticky context={contextRef}>
        <Menu widths={3}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Sticky>
    )
  }
}

export default Nav
