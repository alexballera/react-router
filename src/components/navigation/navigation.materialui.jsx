'use strict'

import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconMenu, Drawer, MenuItem, Menu, Paper, IconButton } from 'material-ui'
import MapsPlace from 'material-ui/svg-icons/maps/place'
import './navigation.scss'

const style = {
  menuItem: {
    display: 'inline-block',
    height: '48px',
    lineHeight: '48px'
  }
}

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    return (
      <Paper>
        <div className='contenedor'>
          <Menu
            desktop
            width={'100%'}
          >
            <IconMenu
              iconButtonElement={<IconButton><MapsPlace /></IconButton>}
              onTouchTap={this.handleToggle}
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onTouchTap={this.handleClose} primaryText='Home' style={style.menuItem} containerElement={<NavLink to='/' />} />
              <MenuItem onTouchTap={this.handleClose} primaryText='Topics' style={style.menuItem} containerElement={<NavLink to='/topics' />} />
              <MenuItem onTouchTap={this.handleClose} primaryText='About' style={style.menuItem} containerElement={<NavLink to='/about' />} />
              <MenuItem onTouchTap={this.handleClose} primaryText='Blog' style={style.menuItem} containerElement={<NavLink to='/blog' />} />
            </Drawer>
            <MenuItem primaryText='Home' style={style.menuItem} containerElement={<NavLink to='/' />} />
            <MenuItem primaryText='Topics' style={style.menuItem} containerElement={<NavLink to='/topics' />} />
            <MenuItem primaryText='About' style={style.menuItem} containerElement={<NavLink to='/about' />} />
            <MenuItem primaryText='Blog' style={style.menuItem} containerElement={<NavLink to='/blog' />} />
          </Menu>
        </div>
      </Paper>
    )
  }
}
export default Navigation
