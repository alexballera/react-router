'use strict'
import React from 'react'
import {Helmet} from 'react-helmet'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Anime from 'react-anime'

import Sections from '../navigation/scroll.component.jsx'

// Estáticos
import './home.scss'
import imagen from '../../static/images/disney-logo.jpg'

class Home extends React.Component {
  render () {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div className='container' >
          <Helmet
            title={'Practica React Webpack'}
            meta={[
                {'name': 'home description', 'content': 'Home Helmet application'}
            ]}
            />
          <main className='home'>
            <ReactCSSTransitionGroup
              transitionName='animate'
              transitionAppear
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}>
              <div className='titulo cssgradients'>
                <Anime
                  opacity={[0, 1]}
                  translateY={'1rem'}
                  delay={(e, i) => i * 1000}
                  >
                  <h1>Pagina Home</h1>
                </Anime>
                <h2 className='sub-titulo' >Subtitulo agregando estilo</h2>
                <img className='imagenHome' src={imagen} />
              </div>
              <Sections />
            </ReactCSSTransitionGroup>
          </main>
        </div>
      )
    }
  }
}
module.exports = Home
