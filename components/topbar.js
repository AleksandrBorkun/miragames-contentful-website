import React, { Component, useEffect } from 'react'
import { Input, Menu , Grid} from 'semantic-ui-react'

export default class TopBar extends Component {

    handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      if(name === 'home' && window.location.pathname !== '/'){
        location.href = '/'
      }else if(name === 'blog' && window.location.pathname !== '/about'){
        location.href = '/blog'
      }
    }
  
    render() {
      const { activeItem, breadcrumb } = this.props

      return (
        <Menu secondary>
          <Menu.Item
            name='home'
            active={!activeItem && !breadcrumb}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='blog'
            active={activeItem === 'blog'}
            onClick={this.handleItemClick}
          />
          {breadcrumb && <Menu.Item
            name={breadcrumb}
            active
          />}
          {/* <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu> */}
        </Menu>
      )
    }
  }