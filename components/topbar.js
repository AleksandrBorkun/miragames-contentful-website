import React, { Component } from 'react'
import { Input, Menu , Grid} from 'semantic-ui-react'

export default class TopBar extends Component {
    state = { activeItem: this.props.activeItem || 'home' }
  
    handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      console.log(window.location.href)
      if(name === 'home' && window.location.pathname !== '/'){
        location.href = '/'
      }else if(name === 'blog' && window.location.pathname !== '/about'){
        location.href = '/blog'
      }
    }
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='blog'
            active={activeItem === 'blog'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
  }