import React, { Component } from 'react'
import Router from 'next/router'
import {  Menu  } from 'semantic-ui-react'
import { Title } from './styled/elements'

const NavigationStyles = {position: 'fixed',
top: 0,
width: '100%',
backgroundColor: 'whitesmoke',
zIndex: 200,
margin: 0}

export default class TopBar extends Component {

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name === 'home' && window.location.pathname !== '/') {
      window.open('/', 'blank')
    } else if (name === 'blog' && window.location.pathname !== '/about') {
      Router.push('/blog')
    } else if (name === 'games' && window.location.pathname !== '/about') {
      Router.push('/games');
    }
  }

  render() {
    const { activeItem, breadcrumb } = this.props

    return (<>
      <Menu secondary style={NavigationStyles}>
        <Menu.Item
          name='home'
          active={!activeItem && !breadcrumb}
          onClick={this.handleItemClick}/>
        <Menu.Item
          name='blog'
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='games'
          active={activeItem === 'games'}
          onClick={this.handleItemClick}
        />
        {breadcrumb && <Menu.Item
          name={breadcrumb}
          active
        />}
      </Menu> 
      <Title> MIRAGAMES STUDIO</Title></>
    )
  }
}