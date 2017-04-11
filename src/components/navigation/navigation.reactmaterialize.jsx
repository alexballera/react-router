'use strict'

import React from 'react'
import {NavLink} from 'react-router-dom'
import { Navbar } from 'react-materialize'
import '../../../node_modules/materialize-css/dist/js/materialize.js'

// Estáticos
import './navigation.scss'

class Navigation extends React.Component {
  render () {
    return (
      <Navbar brand='logo' right>
        <NavLink href='/' className='waves-effect waves-green'>Home<i className='material-icons right'>arrow_drop_down</i></NavLink>
        <NavLink href='/topics' className='waves-effect waves-green'>Topics</NavLink>
        <NavLink href='/about' className='waves-effect waves-green'>About</NavLink>
        <NavLink href='/blog' className='waves-effect waves-green'>Blog</NavLink>
      </Navbar>
    )
  }
}
export default Navigation
