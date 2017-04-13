'use strict'

import React from 'react'
import { NavLink } from 'react-router-dom'
import { DropDownMenu, IconMenu, Drawer, MenuItem, Menu, Paper, IconButton } from 'material-ui'
import MapsPlace from 'material-ui/svg-icons/maps/place'
import './navigation.scss'

const style = {
  menuItem: {
    display: 'inline-block',
    height: '48px',
    lineHeight: '48px'
  },
  customWidth: {
    width: 200
  }
}

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      value: 1
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  handleChange (event, index, value) {
    this.setState({value})
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
            <DropDownMenu
              className='DropDown waves-effect'
              value={this.state.value}
              onChange={this.handleChange}
              autoWidth={false}
              labelStyle={style.menuItem}
              >
              <MenuItem value={1} primaryText='Never' className='DropDownItem' />
              <MenuItem value={2} primaryText='Every Night' className='DropDownItem' />
              <MenuItem value={3} primaryText='Weeknights' />
              <MenuItem value={4} primaryText='Weekends' />
              <MenuItem value={5} primaryText='Weekly' />
            </DropDownMenu>
          </Menu>
        </div>
      </Paper>
    )
  }
}
export default Navigation
