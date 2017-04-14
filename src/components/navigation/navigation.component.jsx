'use strict'

import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  Menu,
  Divider,
  Drawer,
  IconButton,
  MenuItem
} from 'material-ui'
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import Logo from '../../static/images/disney-logo.jpg'
import './navigation.scss'

const styles = {
  menu: {
    position: 'fixed',
    padding: 0
  },
  menuItem: {
    height: '64px',
    lineHeight: '64px'
  }
}

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
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

  render () {
    return (
      <nav className='navbar'>
        <Menu
          className='navbar-menu'
          style={styles.menu}
          >
          <MenuItem
            primaryText={<IconButton><MenuIcon /></IconButton>}
            onTouchTap={this.handleToggle}
            style={styles.menuItem}
            className='navbar-icon hide-on-large-only'
            />
          <MenuItem
            primaryText={<img src={Logo} />}
            style={styles.menuItem}
            className='navbar-logo'
            containerElement={<NavLink to='/' />}
            />
          <div className='navbar-desktop hide-on-med-and-down' >
            <MenuItem primaryText='Home' style={styles.menuItem} anchorOrigin={{horizontal: 'left', vertical: 'bottom'}} rightIcon={<IconButton><ArrowDropDown /></IconButton>} menuItems={[
              <MenuItem primaryText='Home' style={styles.menuItem} containerElement={<Link to='/' />} />,
              <MenuItem primaryText='Topics' style={styles.menuItem} containerElement={<NavLink to='/topics' />} />,
              <MenuItem primaryText='About' style={styles.menuItem} containerElement={<NavLink to='/about' />} />,
              <MenuItem primaryText='Blog' style={styles.menuItem} containerElement={<NavLink to='/blog' />} />
            ]} />
            <MenuItem primaryText='Topics' style={styles.menuItem} containerElement={<NavLink to='/topics' />} />
            <MenuItem primaryText='About' style={styles.menuItem} containerElement={<NavLink to='/about' />} />
            <MenuItem primaryText='Blog' style={styles.menuItem} containerElement={<NavLink to='/blog' />} />
          </div>
        </Menu>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} primaryText='Home' style={styles.menuItem} containerElement={<Link to='/' />} />
          <Divider />
          <MenuItem onTouchTap={this.handleClose} primaryText='Topics' style={styles.menuItem} containerElement={<NavLink to='/topics' />} />
          <Divider />
          <MenuItem onTouchTap={this.handleClose} primaryText='About' style={styles.menuItem} containerElement={<NavLink to='/about' />} />
          <Divider />
          <MenuItem onTouchTap={this.handleClose} primaryText='Blog' style={styles.menuItem} containerElement={<NavLink to='/blog' />} />
          <Divider />
        </Drawer>
      </nav>
    )
  }
}
export default Navigation
