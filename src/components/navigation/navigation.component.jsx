'use strict'

import React from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends React.Component {
  render () {
    return (
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
      </ul>
    )
  }
}
export default Navigation
