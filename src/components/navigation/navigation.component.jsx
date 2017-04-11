'use strict'

import React from 'react'
import {NavLink, Link} from 'react-router-dom'

// Estáticos
import customNavigation from './customNavigation'
import './navigation.scss'

class Navigation extends React.Component {
  componentDidMount () {
    customNavigation()
  }
  render () {
    return (
      <div>
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
            <Link to='#!' data-activates='mobile-demo' className='button-collapse'><i className='material-icons'>menu</i></Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><Link to='/' className='dropdown-button' data-activates='dropdown1'>Home<i className='material-icons right'>arrow_drop_down</i></Link></li>
              <li><NavLink to='/topics' className='waves-effect waves-green'>Topics</NavLink></li>
              <li><NavLink to='/about' className='waves-effect waves-green'>About</NavLink></li>
              <li><NavLink to='/blog' className='waves-effect waves-green'>Blog</NavLink></li>
            </ul>
            <ul className='side-nav' id='mobile-demo'>
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
