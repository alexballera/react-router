'use strict'
import React from 'react'
import './home.scss'

class Home extends React.Component {
  render () {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div className='titulo'>
          <h1>Página Home</h1>
          <h2 className='sub-titulo' >Subtitulo agregando estilo</h2>
        </div>
      )
    }
  }
}
module.exports = Home
