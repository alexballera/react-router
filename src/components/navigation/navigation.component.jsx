'use strict'

import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Scroll from 'react-scroll'

import {
  Menu,
  Divider,
  Drawer,
  IconButton,
  MenuItem
} from 'material-ui'
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import ArrowForward from 'material-ui/svg-icons/navigation/chevron-right'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

import Logo from '../../static/images/disney-logo.jpg'
import './styles.scss'
import styles from './styles.jsx'
import DropDownMenu from './DropDown.jsx'

const ScrollLink = Scroll.Link
const scrollSpy = Scroll.scrollSpy

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      value: 1
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.displayHome = this.displayHome.bind(this)
  }
  componentWillMount () {
    console.log('Se ejecuta antes de inyectar el DOM, estoy en navigation.component')
  }

  componentDidMount () {
    scrollSpy.update()
    console.log('Se ejecuta luego de inyectar el DOM, ideal para AJAX y agregar JQuery')
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  handleChange () {
    this.setState({value: 2})
  }

  displayHome () {
    this.setState({value: 1})
  }

  render () {
    return (
      <nav className='navbar'>
        <Menu
          className='navbar-menu'
          style={styles.menu}
          desktop
          onChange={this.handleChange}
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
            { this.state.value === 1 ? (
              <MenuItem
                primaryText='Home'
                style={styles.menuItem}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                rightIcon={<IconButton><ArrowDropDown /></IconButton>}
                menuItems={DropDownMenu}
                />
            ) : (
              <MenuItem
                primaryText='Home'
                style={styles.menuItem}
                containerElement={<Link to='/' />}
                onClick={this.displayHome}
                />
            )}
            <MenuItem
              primaryText='Topics'
              onClick={this.handleChange}
              style={styles.menuItem}
              containerElement={<NavLink to='/topics' />}
              />
            <MenuItem
              primaryText='About'
              onClick={this.handleChange}
              style={styles.menuItem}
              containerElement={<NavLink to='/about' />} />
            <MenuItem
              primaryText='Blog'
              onClick={this.handleChange}
              style={styles.menuItem}
              containerElement={<NavLink to='/blog' />} />
          </div>
        </Menu>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          onChange={this.handleChange}
        >
          { this.state.value < 2 ? (
            <MenuItem
              primaryText='Home'
              style={styles.menuItem}
              rightIcon={<IconButton><ArrowForward /></IconButton>}
              menuItems={
              [
                <MenuItem
                  onTouchTap={this.handleClose}
                  primaryText='Sección 1'
                  style={styles.menuItem}
                  containerElement={
                    <ScrollLink activeClass='active'to='section1' spy smooth duration={500} />
                    }
                  />,
                <MenuItem
                  onTouchTap={this.handleClose}
                  primaryText='Sección 2'
                  style={styles.menuItem}
                  containerElement={
                    <ScrollLink activeClass='active' to='section2' spy smooth duration={500} />
                    }
                  />,
                <MenuItem
                  onTouchTap={this.handleClose}
                  primaryText='Sección 3'
                  style={styles.menuItem}
                  containerElement={
                    <ScrollLink activeClass='active' to='section3' spy smooth duration={500} />
                    }
                  />,
                <MenuItem
                  onTouchTap={this.handleClose}
                  primaryText='Sección 4'
                  style={styles.menuItem}
                  containerElement={
                    <ScrollLink activeClass='active' to='section4' spy smooth duration={500} />
                    }
                  />
              ]
              }
              />
            ) : (
              <MenuItem
                onTouchTap={this.handleClose}
                primaryText='Home'
                style={styles.menuItem}
                containerElement={<Link to='/' />}
                onClick={this.displayHome}
                />
            )}
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            onClick={this.handleChange}
            primaryText='Topics'
            style={styles.menuItem}
            containerElement={<NavLink to='/topics' />}
            />
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            onClick={this.handleChange}
            primaryText='About'
            style={styles.menuItem}
            containerElement={<NavLink to='/about' />}
            />
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            onClick={this.handleChange}
            primaryText='Blog'
            style={styles.menuItem}
            containerElement={<NavLink to='/blog' />}
            />
          <Divider />
        </Drawer>
      </nav>
    )
  }
}
export default Navigation
