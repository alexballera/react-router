'use strict'

import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../../../node_modules/materialize-css/dist/js/materialize.js'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

// Estáticos
// import Nav from './Navigation'
import './navigation.scss'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  render () {
    return (
      <div>
        <RaisedButton
          label='Toggle Drawer'
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <ul id='dropdown1' className='dropdown-content'>
          <li><NavLink to='/topics'>Componente 1</NavLink></li>
          <li className='divider' />
          <li><NavLink to='/about'>Componente 2</NavLink></li>
          <li className='divider' />
          <li><NavLink to='/blog'>Componente 3</NavLink></li>
        </ul>
        <nav>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo'>Logo</Link>
            <Link to='#!' data-activates='mobile-nav' className='button-collapse'><i className='material-icons'>menu</i></Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><Link to='/' className='dropdown-button' data-activates='dropdown1'>Home<i className='material-icons right'>arrow_drop_down</i></Link></li>
              <li><NavLink to='/topics' className='waves-effect waves-green'>Topics</NavLink></li>
              <li><NavLink to='/about' className='waves-effect waves-green'>About</NavLink></li>
              <li><NavLink to='/blog' className='waves-effect waves-green'>Blog</NavLink></li>
            </ul>
            <ul className='side-nav' id='mobile-nav'>
              <li><NavLink to='/topics' className='waves-effect waves-green'>Topics</NavLink></li>
              <li><NavLink to='/about' className='waves-effect waves-green'>About</NavLink></li>
              <li><NavLink to='/blog' className='waves-effect waves-green'>Blog</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Navigation
