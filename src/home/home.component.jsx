'use strict'
import React from 'react'
import './home.scss'
import imagen from '../images/disney-logo.jpg'

class Home extends React.Component {
  render () {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div className='titulo'>
          <h1>Página Home</h1>
          <h2 className='sub-titulo' >Subtitulo agregando estilo</h2>
          <img src={imagen} />
        </div>
      )
    }
  }
}
module.exports = Home
