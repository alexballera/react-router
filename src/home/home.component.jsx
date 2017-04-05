'use strict'
import React from 'react'
import './home.scss'
import imagen from '../images/disney-logo.jpg'
import {Helmet} from 'react-helmet'

class Home extends React.Component {
  render () {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div>
          <Helmet
            title={'Practica React Webpack'}
            meta={[
              {'name': 'home description', 'content': 'Home Helmet application'}
            ]}
          />
          <div className='titulo'>
            <h1>Página Home</h1>
            <h2 className='sub-titulo' >Subtitulo agregando estilo</h2>
            <img src={imagen} />
          </div>
        </div>
      )
    }
  }
}
module.exports = Home
