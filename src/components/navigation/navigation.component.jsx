'use strict'

import React from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends React.Component {
  render () {
    return (
      <div>
        <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><NavLink to='/' id='home'>Home</NavLink></li>
          <li><NavLink to='/topics'>Topics</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
      </div>
    )
  }
}
export default Navigation
