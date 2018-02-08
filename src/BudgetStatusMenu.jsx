import React, { Component } from 'react'
import { Input, Label, Menu, Icon, Button } from 'semantic-ui-react'

export default class MenuExampleSizeVerticalLarge extends Component {
  state = { activeItem: 'inbox', menuClosed: true }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClose = ()=>{this.setState({menuClosed: !this.state.menuClosed}); console.log("clicked")}

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Button onClick={this.handleClose}>Show Fixed Budget Menu</Button>

        {!this.state.menuClosed?
        <Menu id="sidebar" size='large' vertical>
          <Menu.Item onClick={this.handleClose}>
            <Icon name='close'/>
            <p>Hide Budget Menu</p>
          </Menu.Item>          
          <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
            <Label color='teal'>9</Label>
            Budget Stat 1
          </Menu.Item>

          <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
            <Label>99</Label>
            Budget Stat 2
          </Menu.Item>

          <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
            <Label>1</Label>
            Updates
          </Menu.Item>
        </Menu>:null}
      </div>
    )
  }
}