'use strict'
import React from 'react'
import {Helmet} from 'react-helmet'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Anime from 'react-anime'

// Estáticos
import './home.scss'
import imagen from '../../static/images/disney-logo.jpg'

// Componentes
import Componente1 from './components/component1.jsx'
import Componente2 from './components/component2.jsx'
import Componente3 from './components/component3.jsx'
import Componente4 from './components/component4.jsx'

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
              <img src={imagen} />
            </div>
            <Componente1 />
            <Componente2 />
            <Componente3 />
            <Componente4 />
          </ReactCSSTransitionGroup>
        </div>
      )
    }
  }
}
module.exports = Home
